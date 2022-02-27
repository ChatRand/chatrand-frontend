import ChatList from './ChatList';
import InputBox from './InputBox';
import Status from './Status';

const ChatPlace = () => {
  return (
    <div className="chat-place">
      <Status />
      <ChatList />
      <InputBox />
    </div>
  )
}

export default ChatPlace;