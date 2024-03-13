import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "ridlo",
      email: "ridlo@gmail.com",
    },
    pending: false,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    updateError: (state) => {
      state.pending = false;
      state.error = true;
    },
    deleteAcc: (state) => (state = {}),
  },
});

export const { updateStart, updateSuccess, updateError, deleteAcc } =
  userSlice.actions;
export default userSlice.reducer;
