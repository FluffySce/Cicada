import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';

// Example users
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' },
];

const MessageComponent = () => {
  const [activeUser, setActiveUser] = useState(null); // Track active user for messaging
  const [messages, setMessages] = useState({});
  const [currentMessage, setCurrentMessage] = useState('');

  // Handle sending a message
  const handleSendMessage = () => {
    if (!activeUser) return;

    const newMessages = { ...messages };
    if (!newMessages[activeUser.id]) newMessages[activeUser.id] = [];

    newMessages[activeUser.id].push({ text: currentMessage, sender: 'me' });
    setMessages(newMessages);
    setCurrentMessage(''); // Clear input after sending
  };

  return (
    <div className="flex flex-col h-full">
      {/* User selection */}
      <div className="flex-shrink-0 border-b p-2">
        <p className="text-lg font-semibold mb-2">Conversations</p>
        <ul className="overflow-y-auto h-32">
          {users.map(user => (
            <li
              key={user.id}
              className={`cursor-pointer p-2 rounded-lg ${activeUser?.id === user.id ? 'bg-blue-200' : 'hover:bg-gray-200'}`}
              onClick={() => setActiveUser(user)}
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Messages section */}
      {activeUser ? (
        <div className="flex flex-col flex-grow">
          {/* Message history */}
          <div className="flex-grow p-4 overflow-y-auto border-b">
            {messages[activeUser.id]?.length > 0 ? (
              messages[activeUser.id].map((msg, idx) => (
                <div key={idx} className={`mb-2 ${msg.sender === 'me' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-2 rounded-lg ${msg.sender === 'me' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                    {msg.text}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Start a conversation with {activeUser.name}</p>
            )}
          </div>

          {/* Message input */}
          <div className="p-2 flex items-center">
            <input
              type="text"
              className="flex-grow p-2 border rounded-lg mr-2"
              placeholder="Type a message..."
              value={currentMessage}
              onChange={e => setCurrentMessage(e.target.value)}
            />
            <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition">
              <FiSend className="text-xl" />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <p className="text-gray-500">Select a conversation to start messaging.</p>
        </div>
      )}
    </div>
  );
};

export default MessageComponent;
