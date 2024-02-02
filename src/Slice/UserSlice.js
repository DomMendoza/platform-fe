import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "User123",
  credits: "100,000",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = UserSlice.actions;

export default UserSlice.reducer;
