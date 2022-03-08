import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { useSelector } from "react-redux";

const MessagesList = () => {
  const bottom = useRef(null);
  const messages = useSelector((state) => state.messages);

  const scrollToBottom = () => {
    bottom.current?.scrollIntoView({
      behaviour: 'smooth'
    })
  }

  useEffect(() => {
    scrollToBottom()
  });


  return (
    <div className="overflow-y-scroll messages-list pl-3 pr-3 lg:pl-40 lg:pr-40 flex flex-col h-[75vh]">
      {
        messages.length > 0 ? messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        )) : <div className="w-full h-full flex justify-center items-center text-footertextcolor">
          <span>No Messages Yet...</span>
        </div>
      }
      <div ref={bottom}></div>
    </div>
  )
}

export default MessagesList;