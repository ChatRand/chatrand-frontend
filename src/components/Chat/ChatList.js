import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
const ChatList = () => {
  const bottom = useRef(null);

  const scrollToBottom = () => {
    bottom.current?.scrollIntoView({
      behaviour: 'smooth'
    })
  }

  useEffect(() => {
    scrollToBottom()
  })

  return (
    <div className="chat-list pl-2 pr-2 lg:pl-20 lg:pr-20">
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <div ref={bottom}></div>
    </div>
  )
}

export default ChatList;