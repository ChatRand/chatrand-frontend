import './App.css';
import NavBar from './components/Navigation/NavBar';
import ChatPlace from './components/Chat/ChatPlace';
import {io} from 'socket.io-client'
import {useEffect} from 'react'

import {useState} from 'react';

function App() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    // messages.map((me)

    const newMessage = {
      id: Math.floor(Math.random() * 1000) + 1,
      message: message.message,
      owner: 'me',
      time: '09:00AM'
    }
    setMessages([...messages, newMessage]);
  }

  useEffect(() => {
    const socket = io('http://127.0.0.1:5555');

    socket.on('connect', () => {
      socket.on('welcome', data => {
        console.log(data);
      })
    })
  });
  
  return (
    <div className="app font-wholefont bg-secondary text-textcolor"> 
      <NavBar />
      <ChatPlace messages={messages} onSendMessage={sendMessage}/>
    </div>
  );
}

export default App;
