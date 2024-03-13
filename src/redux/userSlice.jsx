import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     userInfo: {
//       name: "ridlo",
//       email: "ridlo@gmail.com",
//     },
//     pending: false,
//     error: false,
//   },
//   reducers: {
//     updateStart: (state) => {
//       state.pending = true;
//     },
//     updateSuccess: (state, action) => {
//       state.pending = false;
//       state.userInfo = action.payload;
//     },
//     updateError: (state) => {
//       state.pending = false;
//       state.error = true;
//     },
//     deleteAcc: (state) => (state = {}),
//   },
// });

export const updateUserWithThunks = createAsyncThunk(
  "users/update",
  async (user) => {
    const response = await axios.post(
      "http://localhost:5100/api/users/1/update",
      user
    );

    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "ridlo",
      email: "ridlo@gmail.com",
    },
    pending: null,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [updateUserWithThunks.pending]: (state) => {
      state.pending = true;
    },
    [updateUserWithThunks.fulfilled]: (state, action) => {
      state.pending = null;
      state.userInfo = action.payload;
    },
    [updateUserWithThunks.rejected]: (state) => {
      state.pending = null;
      state.error = true;
    },
    deleteAcc: (state) => (state = {}),
  },
});

export const { updateStart, updateSuccess, updateError, deleteAcc } =
  userSlice.actions;
export default userSlice.reducer;
