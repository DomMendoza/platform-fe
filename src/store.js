import { configureStore } from "@reduxjs/toolkit";
import slotsReducer from "./Slice/SlotSlice";
import casinoReducer from "./Slice/CasinoSlice";
import userReducer from "./Slice/UserSlice";
import modalReducer from "./Slice/ModalSlice";

export default configureStore({
  reducer: {
    slots: slotsReducer,
    casino: casinoReducer,
    user: userReducer,
    modal: modalReducer,
  },
});
