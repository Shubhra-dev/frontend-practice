import InfiniteUsers from "./components/InifiniteScroll";
import UserTable from "./components/UserTable";

function App() {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <UserTable />
      <InfiniteUsers />
    </div>
  );
}

export default App;
