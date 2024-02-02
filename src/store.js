import { configureStore } from "@reduxjs/toolkit";
import slotsReducer from "./Slice/SlotSlice";
import casinoReducer from "./Slice/CasinoSlice";
import userReducer from "./Slice/UserSlice";

export default configureStore({
  reducer: { slots: slotsReducer, casino: casinoReducer, user: userReducer },
});
