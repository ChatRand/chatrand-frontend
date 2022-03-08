import { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { addMessage } from '../../store/messageSlice';

const InputBox = ({onSendMessage}) => {

  const [ message, setMessage ] = useState();
  // const dispatch = useDispatch();

  const sendMessage = (e) => {
    e.preventDefault();
    
    if(!message) {
      alert('Please write message');
      return;
    }

    const owner = 'me';
    onSendMessage({message, owner});


    setMessage('');
  }


  return (
    <div className="input-box pl-3 pr-3 lg:pl-40 lg:pr-40 flex items-center mb-5 h-[10vh]">
      <div className="w-[87%] h-full">
        <textarea 
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        name="chat" 
        placeholder="Message..." 
        className="resize-none border-none bg-messagecolor1 form-textarea h-full w-full rounded-tl-lg rounded-bl-lg">
        
        </textarea>
      </div>

      <div className="w-[13%] h-full">
        <button onClick={sendMessage} className="bg-primary h-full w-full rounded-tr-lg rounded-br-lg">
          Send
        </button>
      </div>
    </div>
  )
}

export default InputBox;