import './App.css';
import NavBar from './components/Navigation/NavBar';
import ChatPlace from './components/Chat/ChatPlace';
import { SocketContext, socket } from './Context/socket';
import { useDispatch } from 'react-redux';
import { addMessage } from './store/messageSlice';
import { changeTypingStatus } from './store/typingStatusSlice';

import {useEffect} from 'react';
import { changeStatus } from './store/statusSlice';

function App() {
  const dispatch = useDispatch();

  const receiveMessage = (message) => {
    dispatch(addMessage(message));
  } 

  useEffect(() => {
    socket.on('connect', () => {
      socket.on('matched', (data) => {
        dispatch(changeStatus({
          status: 'matched',
        }))
      });

      socket.on('typing', (data) => {
        dispatch(changeTypingStatus({
          typing: 'typing',
        }));
        
        setTimeout(() => {
          dispatch(changeTypingStatus({
            typing: 'none',
          }));
        }, 5000);
      });
  
      socket.on('message', (data) => {
        const receivedMessage = data.message;

        receiveMessage({
          id: data.id,
          message: receivedMessage,
          owner: 'partner',
          time: data.time
        });
      });
  
      socket.on('left', (data) => {
        dispatch(changeStatus({
          status: 'none',
        }));
      });
    });
  });
  
  return (
    <div className="app font-wholefont bg-secondary text-textcolor h-full w-full"> 
      <SocketContext.Provider value={socket}>
        <NavBar />
        <ChatPlace />
      </SocketContext.Provider>
    </div>
  );
}

export default App;
