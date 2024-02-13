import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginOpen: false,
  registerOpen: false,
  otpOpen: false,
};

const ModalSlice = createSlice({
  name: "modal", // Make sure to use a string for the name
  initialState,
  reducers: {
    handleLoginOpen: (state) => {
      state.loginOpen = true;
    },
    handleLoginClose: (state) => {
      state.loginOpen = false;
    },
    handleRegisterOpen: (state) => {
      state.registerOpen = true;
    },
    handleRegisterClose: (state) => {
      state.registerOpen = false;
    },
    handleOtpOpen: (state) => {
      state.otpOpen = true;
    },
    handleOtpClose: (state) => {
      state.otpOpen = false;
    },
  },
});

export const {
  handleLoginOpen,
  handleLoginClose,
  handleRegisterOpen,
  handleRegisterClose,
  handleOtpOpen,
  handleOtpClose,
} = ModalSlice.actions;

export default ModalSlice.reducer;
