import './App.css';
import NavBar from './components/Navigation/NavBar';
import ChatPlace from './components/Chat/ChatPlace';
import { SocketContext, socket } from './Context/socket';
import { useDispatch } from 'react-redux';
import { addMessage } from './store/messageSlice';

import {useEffect, useRef} from 'react';
import { changeStatus } from './store/statusSlice';

const ESCAPE_KEYS = ["27", "Escape"];

  const useEventListener = (eventName, handler, element = window) => {
    const savedHandler = useRef();

    useEffect(() => {
      savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
      const eventListener = (event) => savedHandler.current(event);

      element.addEventListener(eventName, eventListener);

      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    }, [eventName, element]);
  };

function App() {
  // const [messages, setMessages] = useState([]);
  // const [status, setStatus] = useState('none');

  const handler = ({key}) => {
    if(ESCAPE_KEYS.includes(String(key))) {
      console.log('Esc pressed');
    }
  }

  const dispatch = useDispatch();
  useEventListener("keydown", handler);
  
  const sendMessage = (message) => {
    const newMessage = message.message.trim();

    if(message.owner === 'me') {
      socket.emit('anonymousMessage', {
        message: newMessage,
      });
    }

    dispatch(addMessage({
      id: Math.floor(Math.random() * 1000 + 1),
      message: message.message,
      owner: message.owner,
      time: '09:30AM',
    }));
  }

  const receiveMessage = (message) => {
    dispatch(addMessage(message));
  } 

  useEffect(() => {
    socket.on('connect', () => {
      socket.on('welcome', (data) => {
        console.log(data);
      });
  
      socket.on('matched', (data) => {
        console.log(data.message);
  
        // setStatus('matched');
        dispatch(changeStatus({
          status: 'matched',
        }))
      });

      socket.on('searching', (data) => {
        console.log(data.message);
      })
  
      socket.on('message', (data) => {
        const receivedMessage = data.message;

        receiveMessage({
          id: data.id,
          message: receivedMessage,
          owner: 'partner',
          time: '09:30AM'
        });
        // sendMessage(receivedMessage);
      });
  
      socket.on('left', (data) => {
        // setStatus('none');
        dispatch(changeStatus({
          status: 'none',
        }))
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
    dispatch(changeStatus({
      status: 'searching',
    }))
    socket.emit('searchForMatch');
  }

  const leaveChat = () => {
    // setStatus('none');
    dispatch({
      status: 'none',
    })
  }
  
  return (
    <div className="app font-wholefont bg-secondary text-textcolor h-full w-full"> 
      <SocketContext.Provider value={socket}>
        <NavBar />
        <ChatPlace onSendMessage={sendMessage} onLookForMatch={lookForMatch} onLeaveChat={leaveChat}/>
      </SocketContext.Provider>
    </div>
  );
}

export default App;
