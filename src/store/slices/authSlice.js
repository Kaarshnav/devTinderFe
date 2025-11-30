import { createSlice } from "@reduxjs/toolkit";
const initialState = { islogin: false, user: "" };
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      state.islogin = true;
      state.user = action.payload;
    },
    logOutUser: (state) => {
      state.islogin = false;
      state.user = "";
    },
  },
});
export const { logOutUser, loginUser } = authSlice.actions;
export default authSlice.reducer;
