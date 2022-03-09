import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const message = {
        id: Math.floor(Math.random() * 1000) + 1,
        message: action.payload.message,
        owner: action.payload.owner,
        time: action.payload.time,
      };

      state.push(message);
    },
    clearMessages: state => initialState,
  }
});

export const { addMessage, clearMessages } = messageSlice.actions;

export default messageSlice.reducer;