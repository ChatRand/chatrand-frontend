import './App.css';
import NavBar from './components/Navigation/NavBar';
import ChatPlace from './components/Chat/ChatPlace';
import { SocketContext, socket } from './Context/socket';

import {useEffect, useState} from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('none');
  
  const sendMessage = (message) => {
    console.log(message);
    const newMessage = {
      id: Math.floor(Math.random() * 1000) + 1,
      message: (message.message).trim(),
      owner: message.owner,
      time: '09:00AM'
    }

    if(message.owner === 'me') {
      socket.emit('anonymousMessage', {
        message: newMessage,
      });
    }

    setMessages([...messages, newMessage]);
  }

  // const receiveMessage = (message) => {
  //   console.log('the Message', message);
  //   setMessages([...messages, message]);
  //   console.log('after', messages);
  // } 

  useEffect(() => {
    socket.on('connect', () => {
      socket.on('welcome', (data) => {
        console.log(data);
      });
  
      socket.on('matched', (data) => {
        console.log(data.message);
  
        setStatus('matched');
      });

      socket.on('searching', (data) => {
        console.log(data.message);
      })
  
      socket.on('message', (data) => {
        const receivedMessage = data.message;
        receivedMessage.owner = 'partner'
        sendMessage(receivedMessage);
      });
  
      socket.on('left', (data) => {
        setStatus('none');
      });
    })
  })

  // useEffect(() => {
    
  // });

  // NOTE: The types of state user get into when interacting with the matching functionality

  // 1. 'searching' looking for match 
  // 2. 'matched' chatting with a person
  // 3. 'none' doing nothing on the platform

  const lookForMatch = () => {
    setStatus('searching');
    socket.emit('searchForMatch');
  }

  const leaveChat = () => {
    setStatus('none');
  }
  
  return (
    <div className="app font-wholefont bg-secondary text-textcolor h-full w-full"> 
      <SocketContext.Provider value={socket}>
        <NavBar />
        <ChatPlace messages={messages} status={status} onSendMessage={sendMessage} onLookForMatch={lookForMatch} onLeaveChat={leaveChat}/>
      </SocketContext.Provider>
    </div>
  );
}

export default App;
