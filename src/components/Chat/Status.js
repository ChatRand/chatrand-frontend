import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SocketContext } from "../../Context/socket";
import { changeStatus } from "../../store/statusSlice";
import { clearMessages } from '../../store/messageSlice';
// import { changeGenderOption } from "../../store/genderSlice";

const Status = () => {
  const statusData = useSelector(state => state.status);
  const socket = useContext(SocketContext);
  const dispatch = useDispatch();
  // const genderOption = useSelector(state => state.gender)[0];

  const status = statusData[0];


  const leaveChat = () => {
    socket.emit('leaveChat');
    dispatch(changeStatus({
      status: 'none'
    }));
  }

  // const cancelSearch = () => {
    
  // }

  const lookForMatch = () => {
    dispatch(clearMessages({}));
    socket.emit('searchForMatch');

    dispatch(changeStatus({
      status: 'searching',
    }));
  }

  // const handleGenderChange = (e) => {
  //   const selectedGender = e.target.value;

  //   dispatch(changeGenderOption({
  //     gender: genderOption.gender,
  //     preferedGender: selectedGender,
  //   }));
  // }

  // const handleGenderPreferenceChange = (e) => {
  //   const selectedGender = e.target.value;

  //   dispatch(changeGenderOption({
  //     gender: selectedGender,
  //     preferedGender: genderOption.preferedGender,
  //   }));
  // }

  return (
   <div className={'status p-2 flex items-center justify-around pl-2 pr-2 lg:pl-40 lg:pr-40 h-[9vh] ' +  status }>
      <div className="flex items-center">
        { status === 'matched' ? 
          <h3 onClick={leaveChat} 
            className={'rounded-md p-2 h-full flex items-center cursor-pointer ' + status}
          >
            Leave Chat
          </h3>
          : 
          status === 'searching' ? 
          <h3 
            // onClick={cancelSearch} 
            className={'rounded-md p-2 h-full flex items-center cursor-pointer ' + status}
            >
              Searching
          </h3> 
          :
          <h3 
            onClick={lookForMatch} 
            className={'rounded-md p-2 h-full flex items-center cursor-pointer ' + status}
            >
              Get Matched
          </h3> 
        } 

        <p className="ml-3">
          { status === 'none' ? 'Not Matched' : status }
        </p>
      </div>
   </div> 
  )
}

export default Status;