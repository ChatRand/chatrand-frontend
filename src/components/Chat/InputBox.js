import { useState } from 'react'

const InputBox = ({onSendMessage}) => {

  const [ message, setMessage ] = useState();

  const sendMessage = (e) => {
    e.preventDefault();
    
    if(!message) {
      alert('Please write message');
      return;
    }

    onSendMessage({message});

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
        className="resize-none border-none bg-messagecolor1 form-textarea h-full w-full">
        
        </textarea>
      </div>

      <div className="w-[13%] h-full">
        <button onClick={sendMessage} className="bg-primary h-full w-full">
          Send
        </button>
      </div>
    </div>
  )
}

export default InputBox;