import { createSlice } from "@reduxjs/toolkit";

export const typingStatusSlice = createSlice({
  name: 'typing',
  initialState: [
    'none',
  ],
  reducers: {
    changeTypingStatus: (state, action) => {
      const typing = action.payload.typing;

      state[0] = typing;
    }
  }
});

export const { changeTypingStatus } = typingStatusSlice.actions;

export default typingStatusSlice.reducer;