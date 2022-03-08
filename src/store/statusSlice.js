import { createSlice } from '@reduxjs/toolkit';

export const statusSlice = createSlice({
  name: 'status',
  initialState: [
    'none'
  ],
  reducers: {
    changeStatus: (state, action) => {
      const status = action.payload.status;

      state[0] = status;
    }
  }
});

export const { changeStatus } = statusSlice.actions;

export default statusSlice.reducer;