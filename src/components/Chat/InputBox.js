import { useContext, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SocketContext } from '../../Context/socket';
import { addMessage } from '../../store/messageSlice';

// let lastType = null;
const InputBox = () => {
  const socket = useContext(SocketContext);

  const [ message, setMessage ] = useState("");
  const dispatch = useDispatch();
  const statusData = useSelector(status => status.status);
  const typingStatus = useSelector(typing => typing.typing)[0];
  console.log(typingStatus);
  const status = statusData[0];
  const ESCAPE_KEYS = ["27", "Escape"];

  const useEventListener = (eventName, handler, element = window) => {
    const savedHandler = useRef();

    useEffect(() => {
      savedHandler.current = handler;
    }, [handler]);


    useEffect(() => {
      const eventListener = event => savedHandler.current(event);

      element.addEventListener(eventName, eventListener);

      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    }, [eventName, element]);
  };

  const handler = ({key}) => {
    if(ESCAPE_KEYS.includes(String(key))) {
      console.log('Esc pressed!');
    }
  }

  useEventListener("keydown", handler);

  const sendMessage = (e) => {
    e.preventDefault();
    
    if(message === "") {
      return;
    }

    if(status === 'none') {
      return;
    }
    // const owner = 'me';
    // onSendMessage({message, owner});

    const newMessage = message.trim();
    socket.emit('anonymousMessage', {
      message: newMessage,
    });

    const currentTime = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

    dispatch(addMessage({
      id: Math.floor(Math.random() * 1000 + 1),
      message: message,
      owner: 'me',
      time: currentTime,
    }));

    setMessage('');
  }

  const handleInputChange = (e) => {
    setMessage(e.target.value);

    // if(lastType == null) {
    //   lastType = new Date();
    //   socket.emit('typing');
    // } else {
    //   let now = new Date();

    //   if((now - lastType) > 10000) {
    //     console.log('yes');
    //     socket.emit('typing');
    //     lastType = now;
    //   }
      
    // }

    socket.emit('typing');
  }

  return (
    <div className="input-box pl-3 pr-3 lg:pl-40 lg:pr-40 flex items-center mb-5 h-[10vh]">
      <div className="w-[87%] h-full">
        <textarea 
        onChange={handleInputChange}
        value={message}
        name="chat" 
        placeholder="Message..." 
        className="resize-none border-none bg-messagecolor1 form-textarea h-full w-full rounded-tl-lg rounded-bl-lg">
        
        </textarea>
      </div>

      <div className="w-[13%] h-full">
        <button onClick={sendMessage} className="bg-primary h-full w-full rounded-tr-lg rounded-br-lg">
          Send
        </button>
      </div>
    </div>
  )
}

export default InputBox;