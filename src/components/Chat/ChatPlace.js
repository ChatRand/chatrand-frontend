import MessagesList from './MessagesList';
import InputBox from './InputBox';
import Status from './Status';

const ChatPlace = ({messages, onSendMessage}) => {
  return (
    <div className="chat-place">
      <Status />
      <MessagesList messages={messages}/>
      <InputBox onSendMessage={onSendMessage}/>
    </div>
  )
}

export default ChatPlace;