import { ChevronDown, Contact, File, Info, MessageCircle, Search, Send } from "lucide-react";
import { useRef, useState } from "react";

const MessagePage = () => {
  const inputRef = useRef();
  const [messages, setMessages] = useState([
    { sender: "Oguz", content: "Hey, how are you?" },
    { sender: "You", content: "I'm good, thanks!" },
    { sender: "Oguz", content: "Great to hear! Let's catch up soon." },
  ]);
  const [messageContent, setMessageContent] = useState("");

  const handleInput = () => {
    inputRef.current.style.height = 'auto';
    inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    setMessageContent(inputRef.current.value);
  };

  const handleSendMessage = () => {
    if (messageContent.trim()) {
      setMessages([...messages, { sender: "You", content: messageContent }]);
      setMessageContent("");
      inputRef.current.style.height = 'auto';
    }
  };

  return (
    <div className="flex flex-col gap-1 px-3 h-full w-full">
      <div className="flex items-center justify-between py-3">
        <div className="flex gap-2 items-center">
          <img src="https://img.icons8.com/ios/50/228BE6/beach-ball.png" alt="User Avatar" />
          <div className="flex flex-col font-semibold">
            <div>Oguz Yogix</div>
            <div className="text-sm text-gray-500">oggyandcockroaches@gmail.com</div>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <Search className="text-gray-500 w-6" />
          <div className="font-bold gap-2 border-2 border-solid flex rounded-md p-0.5">
            <MessageCircle className="w-6" /> Messenger <ChevronDown />
          </div>
          <Info />
        </div>
      </div>

      <div className="bg-slate-200 m-2 p-3 rounded-md w-full flex-1 overflow-y-scroll">
        <div className="flex flex-col gap-3">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"} p-2`}>
              <div className={`max-w-xs px-4 py-2 rounded-lg ${msg.sender === "You" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col  h-fit w-full justify-between rounded-md border-2 border-slate-200 m-2 p-3">
        <textarea
          ref={inputRef}
          placeholder="Type your message..."
          className="w-full min-h-fit resize-none overflow-hidden"
          onInput={handleInput}
          value={messageContent}
          style={{ overflow: 'hidden', resize: 'none' }}
        />
        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-2">
            <MessageCircle className="w-5" />
            <Contact className="w-5" />
            <File className="w-5" />
          </div>

          <div className="flex gap-2 items-center">
            <Send
              className="w-5 cursor-pointer"
              onClick={handleSendMessage}
              style={{ opacity: messageContent.trim() ? 1 : 0.5, pointerEvents: messageContent.trim() ? 'auto' : 'none' }}
            />
            <div className="bg-gray-200 h-full w-0.5"></div>
            <ChevronDown className="w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
