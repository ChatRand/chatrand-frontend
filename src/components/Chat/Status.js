const Status = ({status, onLeaveChat, onLookForMatch}) => {
  return (
   <div className={'status p-2 flex items-center pl-2 pr-2 lg:pl-40 lg:pr-40 h-[9vh] ' +  status }>
      { status === 'matched' ? <h3 onClick={onLeaveChat} 
      className={'rounded-sm p-2 h-full flex items-center cursor-pointer ' + status}>
        Leave Chat
      </h3>: <h3 
      onClick={onLookForMatch} 
      className={'rounded-sm p-2 h-full flex items-center cursor-pointer ' + status}>
        Get Matched
      </h3> } <p className="ml-3">{ status === 'none' ? 'Not Matched' : status }</p>
   </div> 
  )
}

export default Status;