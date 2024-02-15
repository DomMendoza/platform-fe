import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: "",
  username: "",
  email: "",
  phone: "",
  user_type: "",
  birthdate: "",
  referral_token: null,
  wallet: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const {
        uid,
        username,
        email,
        phone,
        user_type,
        birthdate,
        referral_token,
      } = action.payload;
      state.uid = uid;
      state.email = email;
      state.phone = phone;
      state.user_type = user_type;
      state.birthdate = birthdate;
      state.username = username;
      state.referral_token = referral_token;
    },
    setWallet: (state, action) => {
      state.wallet = action.payload;
    },
  },
});

export const { setUser, setWallet } = UserSlice.actions;

export default UserSlice.reducer;
