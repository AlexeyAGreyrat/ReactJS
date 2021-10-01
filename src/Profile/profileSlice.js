import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    inputName: "",
  },
  reducers: {
    setNameSurname: (state, action) => {
      console.log(action);
      state.inputName = action.payload.inputName;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNameSurname } = profileSlice.actions;

export default profileSlice.reducer;
