import { configureStore } from "@reduxjs/toolkit";
import messageReducer from './messageSlice';
import statusReducer from './statusSlice';

export default configureStore({
  reducer: {
    messages: messageReducer,
    status: statusReducer,
  },
});