import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginOpen: false,
  registerOpen: false,
  otpOpen: false,
  unavailableOpen: false,
  expiredSessionOpen: false,
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
    handleUnavailableOpen: (state) => {
      state.unavailableOpen = true;
    },
    handleUnavailableClose: (state) => {
      state.unavailableOpen = false;
    },
    handleExpiredSessionOpen: (state) => {
      state.expiredSessionOpen = true;
    },
    handleExpiredSessionClose: (state) => {
      state.expiredSessionOpen = false;
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
  handleUnavailableOpen,
  handleUnavailableClose,
  handleExpiredSessionOpen,
  handleExpiredSessionClose,
} = ModalSlice.actions;

export default ModalSlice.reducer;
