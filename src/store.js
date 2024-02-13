import { configureStore } from "@reduxjs/toolkit";
import slotsReducer from "./Slice/SlotSlice";
import casinoReducer from "./Slice/CasinoSlice";
import ebingoReducer from "./Slice/EbingoSlice";
import userReducer from "./Slice/UserSlice";
import modalReducer from "./Slice/ModalSlice";

export default configureStore({
  reducer: {
    slots: slotsReducer,
    casino: casinoReducer,
    ebingo: ebingoReducer,
    user: userReducer,
    modal: modalReducer,
  },
});
