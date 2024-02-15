import { createSlice } from "@reduxjs/toolkit";

//Providers
import dg from "../Assets/dg.webp";
import jili from "../Assets/jili.webp";
import cq9 from "../Assets/cq9.webp";
import fachai from "../Assets/fachai.webp";
import jdb from "../Assets/jdb.webp";
import playtech_1 from "../Assets/playtech_1.webp";

const initialState = {
  slotsGameData: [
    {
      provider: "dg",
      logo: dg,
      games: [],
      jackpot: 24654326,
    },
    {
      provider: "jili",
      logo: jili,
      games: [],
      jackpot: 24654326,
    },
    {
      provider: "cq9",
      logo: cq9,
      games: [],
      jackpot: 454324523,
    },
    {
      provider: "fachai",
      logo: fachai,
      games: [],
      jackpot: 35467358,
    },
    {
      provider: "jdb",
      logo: jdb,
      games: [],
      jackpot: 21315345,
    },
    {
      provider: "playtech",
      logo: playtech_1,
      games: [],
      jackpot: 13436146,
    },
  ],
  providerData: {},
  activeProvider: "",
};

const SlotSlice = createSlice({
  name: "slots",
  initialState,
  reducers: {
    setActiveProvider: (state, action) => {
      const currentProvider = state.slotsGameData.find(
        (item) => item.provider === action.payload
      );

      return {
        ...state,
        providerData: currentProvider ? currentProvider : {},
        activeProvider: action.payload,
      };
    },
    setDynastyGaming: (state, action) => {
      const dgIndex = state.slotsGameData.findIndex(
        (provider) => provider.provider === "dg"
      );
      if (dgIndex !== -1) {
        state.slotsGameData[dgIndex].games = action.payload;
        //Initialize
        state.providerData = state.slotsGameData[0];
        state.activeProvider = state.slotsGameData[0].provider;
      }
    },
    setJili: (state, action) => {
      const jiliIndex = state.slotsGameData.findIndex(
        (provider) => provider.provider === "jili"
      );
      if (jiliIndex !== -1) {
        state.slotsGameData[jiliIndex].games = action.payload;
        //Initialize
        state.providerData = state.slotsGameData[0];
        state.activeProvider = state.slotsGameData[0].provider;
      }
    },
  },
});

export const { setActiveProvider, setDynastyGaming, setJili } =
  SlotSlice.actions;

export default SlotSlice.reducer;
