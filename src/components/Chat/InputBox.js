const InputBox = () => {
  return (
    <div className="input-box pl-2 pr-2 lg:pl-20 lg:pr-20">
      <textarea name="chat" placeholder="Message..." className="w-full resize-none border-none bg-messagecolor1 mt-2 form-textarea h-12">
      
      </textarea>
    </div>
  )
}

export default InputBox;