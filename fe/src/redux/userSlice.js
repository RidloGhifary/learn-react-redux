import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      username: "",
      email: "",
      password: "",
    },
    pending: false,
    error: false,
  },
  reducers: {
    signUpStart: (state) => {
      state.pending = true;
    },
    signUpSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    signUpError: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { signUpError, signUpStart, signUpSuccess } = userSlice.actions;
export default userSlice.reducer;
