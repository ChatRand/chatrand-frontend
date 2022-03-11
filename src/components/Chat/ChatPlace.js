import MessagesList from './MessagesList';
import InputBox from './InputBox';
import Status from './Status';
import { useSelector } from 'react-redux';

const ChatPlace = ({status, onSendMessage, onLookForMatch, onLeaveChat}) => {
  const typingStatus = useSelector(typing => typing.typing)[0];

  return (
    <div className="chat-place h-[84.5vh] flex flex-col content-between">
      <Status status={status} onLookForMatch={onLookForMatch} onLeaveChat={onLeaveChat}/>
      <MessagesList />
      <div className="h-5 w-full lp-3 pr-3 lg:pl-40 lg:lr-40 mb-2 flex justify-center"><span className="text-sm">{ typingStatus === 'typing' ? 'typing...' : ' ' }</span></div>
      <InputBox onSendMessage={onSendMessage}/>
    </div>
  )
}

export default ChatPlace;