import { configureStore } from "@reduxjs/toolkit";
import messageReducer from './messageSlice';
import statusReducer from './statusSlice';
import typingStatusSlice from "./typingStatusSlice";
import genderSlice from "./genderSlice";

export default configureStore({
  reducer: {
    messages: messageReducer,
    status: statusReducer,
    typing: typingStatusSlice,
    gender: genderSlice,
  },
});