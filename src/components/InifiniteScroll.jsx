import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef, useEffect } from "react";

const fetchUsers = async ({ pageParam = 1 }) => {
  const res = await fetch(`https://reqres.in/api/users?page=${pageParam}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1", // replace safely
    },
  });

  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};

export default function InfiniteUsers() {
  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["infinite-users"],
    queryFn: fetchUsers,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });

  const observerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage]);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError)
    return <p className="text-center text-red-500">Failed to load users.</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Infinite Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.pages.flatMap((page) =>
          page.data.map((user) => (
            <div
              key={user.id}
              className="p-4 border rounded flex items-center space-x-4"
            >
              <img
                src={user.avatar}
                alt={user.first_name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <p className="font-semibold">
                  {user.first_name} {user.last_name}
                </p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Infinite Scroll Trigger */}
      <div ref={observerRef} className="mt-6 h-10">
        {isFetchingNextPage && (
          <p className="text-center text-sm">Loading more...</p>
        )}
      </div>

      {!hasNextPage && (
        <p className="text-center text-gray-500 mt-4">
          You have reached the end.
        </p>
      )}
    </div>
  );
}
