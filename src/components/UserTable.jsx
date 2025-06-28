import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};

export default function PaginatedUsers() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const [page, setPage] = useState(1);
  const pageSize = 5;

  const paginatedData = data?.slice((page - 1) * pageSize, page * pageSize);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error fetching users 😥</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        Manual Pagination (Frontend Only)
      </h2>

      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">City</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData?.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          ⬅ Previous
        </button>

        <span>Page {page}</span>

        <button
          onClick={() =>
            setPage((p) => (p * pageSize < data.length ? p + 1 : p))
          }
          disabled={page * pageSize >= data.length}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}
