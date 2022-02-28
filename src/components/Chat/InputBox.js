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
    <div className="input-box pl-3 pr-3 lg:pl-40 lg:pr-40 flex items-center justify-center mb-5">
      <div className="w-[90%] h-full">
        <textarea 
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        name="chat" 
        placeholder="Message..." 
        className="resize-none border-none bg-messagecolor1 mt-2 form-textarea w-full">
        
        </textarea>
      </div>

      <div className="w-[10%] h-full">
        <button onClick={sendMessage} className="w-full h-full bg-primary p-2">
          Send
        </button>
      </div>
    </div>
  )
}

export default InputBox;