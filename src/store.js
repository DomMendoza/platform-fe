import { configureStore } from "@reduxjs/toolkit";
import slotsReducer from "./Slice/SlotSlice";
import casinoReducer from "./Slice/CasinoSlice";

export default configureStore({
  reducer: { slots: slotsReducer, casino: casinoReducer },
});
