import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

const MessagesList = ({messages}) => {
  const bottom = useRef(null);

  const scrollToBottom = () => {
    bottom.current?.scrollIntoView({
      behaviour: 'smooth'
    })
  }

  useEffect(() => {
    scrollToBottom()
  });


  return (
    <div className="messages-list pl-3 pr-3 lg:pl-40 lg:pr-40 flex flex-col h-[75vh]">

      {
        messages.length > 0 ? messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        )) : 'No Messages Yet'
      }
      <div ref={bottom}></div>
    </div>
  )
}

export default MessagesList;