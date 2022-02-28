import MessagesList from './MessagesList';
import InputBox from './InputBox';
import Status from './Status';

const ChatPlace = ({messages, onSendMessage}) => {
  return (
    <div className="chat-place h-[84.5vh] flex flex-col content-between">
      <Status />
      <MessagesList messages={messages}/>
      <InputBox onSendMessage={onSendMessage}/>
    </div>
  )
}

export default ChatPlace;