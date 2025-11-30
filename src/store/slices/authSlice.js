import { createSlice } from "@reduxjs/toolkit";
const initialState = { islogin: false, token: "" };
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      state.islogin = true;
      state.token = action.payload;
    },
    logOutUser: (state) => {
      state.islogin = false;
      state.token = "";
    },
  },
});
export const { logOutUser, loginUser } = authSlice.actions;
export default authSlice.reducer;
