import React, { useState } from "react";
import { Link } from "react-router-dom";

  const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [typing, setTyping] = useState(false);

  const { isLoggedIn } = ""; 

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const message = {
        message: newMessage.trim(),
      };
      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    } else {
      setTyping(true);
      setTimeout(() => setTyping(false), 2000);
    }
  };

  return (
    <>
      <div
        className="fixed bottom-4 right-7 w-16 h-16 rounded-full bg-cover cursor-pointer shadow-lg"
        style={{
          backgroundImage:
            'url("https://image.crisp.chat/avatar/website/b21f93c5-b94e-40ff-8b48-071a822e5da1/120/?1726054827050")',
        }}
        onClick={toggleChat}
      ></div>

      {isChatOpen && (
        <div className="fixed bottom-[100px] right-7 w-[350px] h-[390px] bg-white rounded-lg shadow-lg flex flex-col">
          <div className="bg-orange-500 text-white p-4 rounded-t-lg h-[70px]">
            <h2 className="text-xl font-semibold flex justify-center">
              <img
                src="https://image.crisp.chat/avatar/website/b21f93c5-b94e-40ff-8b48-071a822e5da1/120/?1726054827050"
                className="w-8 h-8 rounded-full relative right-2"
                alt="Chatbot"
              />
              Posbytz
            </h2>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            {isLoggedIn ? (
              <>
                <div className="text-sm text-gray-700 mb-2">
                  Welcome to Posbytz chat!
                </div>
                {messages.map((msg, index) => (
                  <div key={index} className="text-sm mb-1 text-left">
                    <div className="inline-block p-2 rounded-lg bg-orange-400 text-black">
                      {msg.message}
                    </div>
                  </div>
                ))}
                {typing && <div className="text-sm text-gray-500">Typing...</div>}
              </>
            ) : (
              <div>
                <p className="text-gray-700 mb-4">
                  Please login or register to continue.
                </p>
                <button className="block w-full mb-2 bg-blue-500 text-white p-2 rounded">
                  <Link to="/Login">Login</Link>
                </button>
                <button className="block w-full bg-green-500 text-white p-2 rounded">
                  <Link to="/Register">Register</Link>
                </button>
              </div>
            )}
          </div>

          {isLoggedIn && (
            <div className="flex items-center p-2 border-t">
              <div className="relative flex-1">
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-600 pr-10"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>

              <button
                className="ml-2 p-2 bg-orange-500 text-white rounded-lg"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          )}
        </div>
      )} 
    </>
  );
};

export default Chatbot;
