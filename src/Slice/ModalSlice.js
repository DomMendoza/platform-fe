import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginOpen: false,
  registerOpen: false,
  otpOpen: false,
  unavailableOpen: false,
  expiredSessionOpen: false,
  personalInfoOpen: false,
  accountVerOpen: false,
  phoneVerOpen: false,
  transacPassOpen: false,
  loginPassOpen: false,
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
    // Profile Progress
    handlePersonalInfoOpen: (state) => {
      state.personalInfoOpen = true;
    },
    handlePersonalInfoClose: (state) => {
      state.personalInfoOpen = false;
    },
    handleAccountVerOpen: (state) => {
      state.accountVerOpen = true;
    },
    handleAccountVerClose: (state) => {
      state.accountVerOpen = false;
    },
    handlePhoneVerOpen: (state) => {
      state.phoneVerOpen = true;
    },
    handlePhoneVerClose: (state) => {
      state.phoneVerOpen = false;
    },
    handleTransacPassOpen: (state) => {
      state.transacPassOpen = true;
    },
    handleTransacPassClose: (state) => {
      state.transacPassOpen = false;
    },
    handleLoginPassOpen: (state) => {
      state.loginPassOpen = true;
    },
    handleLoginPassClose: (state) => {
      state.loginPassOpen = false;
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
  handlePersonalInfoOpen,
  handlePersonalInfoClose,
  handleAccountVerOpen,
  handleAccountVerClose,
  handlePhoneVerOpen,
  handlePhoneVerClose,
  handleTransacPassOpen,
  handleTransacPassClose,
  handleLoginPassOpen,
  handleLoginPassClose,
} = ModalSlice.actions;

export default ModalSlice.reducer;
