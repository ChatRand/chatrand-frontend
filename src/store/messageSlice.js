import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      const message = {
        id: Math.floor(Math.random() * 1000) + 1,
        message: action.payload.message,
        owner: action.payload.owner,
        time: action.payload.time,
      };

      state.push(message);
    }
  }
});

export const { addMessage } = messageSlice.actions;

export default messageSlice.reducer;