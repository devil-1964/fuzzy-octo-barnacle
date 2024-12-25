import ChatsPage from "./components/ChatsPage";
import InfoPage from "./components/InfoPage";
import MessagePage from "./components/MessagePage";

function App() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 ">
        <ChatsPage />
      </div>

      <div className=" flex-[3]">
        <MessagePage />
      </div>

      <div className="flex-1">
        <InfoPage />
      </div>
    </div>
  );
}

export default App;
