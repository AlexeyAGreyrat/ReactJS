import { createSlice } from "@reduxjs/toolkit";

export const API_URL = "https://randomfox.ca/floof/";

export const Picture = createSlice({
  name: "Picture",
  initialState: {
    loading: false,
    error: false,
    message: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});
export const { setLoading, setError, setMessage } = Picture.actions;
export default Picture.reducer;
