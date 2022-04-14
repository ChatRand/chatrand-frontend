 import { createSlice } from "@reduxjs/toolkit";

export const genderSlice = createSlice({
  name: 'gender',
  initialState: [
    {
      gender: 'Any',
      preferedGender: 'Any',
    }
  ],
  reducers: {
    changeGenderOption: (state, action) => {
      const gender = {
        gender: action.payload.gender,
        preferedGender: action.payload.preferedGender,
      };

      state[0] = gender;
    },
  }
});

export const { changeGenderOption } = genderSlice.actions;

export default genderSlice.reducer;