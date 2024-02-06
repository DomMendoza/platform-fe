import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

//API
// import { loginUser } from "../Services/auth.service";

const initialState = {
  username: "",

  status: "idle",
  error: null,
  credits: "100,000",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  // extraReducers(builder) {
  //   builder
  //     .addCase(loginUser.pending, (state, action) => {
  //       state.status = "loading";
  //     })
  //     .addCase(loginUser.fulfilled, (state, action) => {
  //       const decodedToken = jwtDecode(action.payload.loginAuthenticate);

  //       state.status = "succeeded";
  //       state.username = decodedToken.username;
  //     })
  //     .addCase(loginUser.rejected, (state, action) => {
  //       state.status = "failed";
  //       state.error = action.payload; // Assuming the payload contains error message
  //     });
  // },
});

export const {} = UserSlice.actions;

export default UserSlice.reducer;
