import MessagesList from './MessagesList';
import InputBox from './InputBox';
import Status from './Status';

const ChatPlace = ({status, messages, onSendMessage, onLookForMatch, onLeaveChat}) => {
  return (
    <div className="chat-place h-[84.5vh] flex flex-col content-between">
      <Status status={status} onLookForMatch={onLookForMatch} onLeaveChat={onLeaveChat}/>
      <MessagesList messages={messages}/>
      <InputBox onSendMessage={onSendMessage}/>
    </div>
  )
}

export default ChatPlace;