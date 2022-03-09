import { useSelector } from "react-redux";

const Status = ({ onLeaveChat, onLookForMatch}) => {
  const statusData = useSelector(state => state.status);
  const status = statusData[0];

  return (
   <div className={'status p-2 flex items-center justify-around pl-2 pr-2 lg:pl-40 lg:pr-40 h-[9vh] ' +  status }>
      <div className="flex items-center">
        { status === 'matched' ? <h3 onClick={onLeaveChat} 
        className={'rounded-md p-2 h-full flex items-center cursor-pointer shadow-xl ' + status}>
          Leave Chat
        </h3>: <h3 
        onClick={onLookForMatch} 
        className={'rounded-md p-2 h-full flex items-center cursor-pointer shadow-xl ' + status}>
          Get Matched
        </h3> } <p className="ml-3">{ status === 'none' ? 'Not Matched' : status }</p>
      </div>

      <div className="flex items-center">
        <select name="Prefered Gender" className="p-2 rounded-md cursor-pointer bg-messagecolor1 shadow-xl">
          <option value="male" className="option h-full">
            Male
          </option>
          <option value="female" className="option h-full">
            Female
          </option>
          <option value="none">
            Doesn't matter
          </option>
        </select>
      </div>
   </div> 
  )
}

export default Status;