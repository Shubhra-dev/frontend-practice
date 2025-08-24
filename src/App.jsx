import CartApp from "./components/CartApp";
import ChatApp from "./components/FakeWebSocket";
import InfiniteUsers from "./components/InifiniteScroll";
import UserTable from "./components/UserTable";

function App() {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <CartApp />
      <div className="mt-5">{/* <ChatApp /> */}</div>
    </div>
  );
}

export default App;
