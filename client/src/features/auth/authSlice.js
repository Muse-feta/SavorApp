import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    decodedToken: null,
  },
  reducers: {
    decodeToken(state, action) {
      state.decodedToken = action.payload;
    },
  },
});

export const { decodeToken } = authSlice.actions;
export default authSlice.reducer;
