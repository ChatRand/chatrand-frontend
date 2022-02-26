import ChatList from './ChatList';
import InputBox from './InputBox';
import Status from './Status';

const ChatPlace = () => {
  return (
    <div className="chat-place flex flex-col items-center">
      <Status />
      <ChatList />
      <InputBox />
    </div>
  )
}

export default ChatPlace;