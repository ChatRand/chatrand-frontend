import { useEffect, useState, useRef } from "react";
import { io } from 'socket.io-client';

const useChat = () => {
  const [messages, setMessage] = useState([]);
  const socket = useRef();

  useEffect(() => {
    socket.current = io('http://127.0.0.1:5555');
  })
}


export default useChat;