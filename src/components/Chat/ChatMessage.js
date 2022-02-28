const ChatMessage = ({message}) => {
  return (
    <div className={'mt-2 mb-2 bg-messagecolor1 max-w-[75%] break-words rounded-lg p-2 chat-message' + (message.owner === 'me'? ' self-end': ' self-start')}>
      <p className="text-sm one">
        {message.message}
      </p>
      <div className="flex text-footersize text-footertextcolor items-end justify-end">
        <span className="pr-1">
          {message.time}
        </span>
      </div>
    </div>
  )
};  

export default ChatMessage;