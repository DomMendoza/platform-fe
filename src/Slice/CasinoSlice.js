import { createSlice } from "@reduxjs/toolkit";

//Providers
import dg from "../Assets/dg.webp";
import jili from "../Assets/jili.webp";
import cq9 from "../Assets/cq9.webp";
import fachai from "../Assets/fachai.webp";
import jdb from "../Assets/jdb.webp";
import playtech_1 from "../Assets/playtech_1.webp";

const initialState = {
  casinoGameData: [
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

// Find the initial provider based on activeProvider
const initialProvider = initialState.casinoGameData.find(
  (item) => item.provider === initialState.activeProvider
);
// Set providerData based on the initial provider
initialState.providerData = initialProvider ? initialProvider : {};

const CasinoSlice = createSlice({
  name: "casino",
  initialState,
  reducers: {
    setActiveProvider: (state, action) => {
      const currentProvider = state.casinoGameData.find(
        (item) => item.provider === action.payload
      );

      return {
        ...state,
        providerData: currentProvider ? currentProvider : {},
        activeProvider: action.payload,
      };
    },
    setDynastyGaming: (state, action) => {
      const dgIndex = state.casinoGameData.findIndex(
        (provider) => provider.provider === "dg"
      );
      if (dgIndex !== -1) {
        state.casinoGameData[dgIndex].games = action.payload;
        //Initialize
        state.providerData = state.casinoGameData[0];
        state.activeProvider = state.casinoGameData[0].provider;
      }
    },
    setJili: (state, action) => {
      const jiliIndex = state.casinoGameData.findIndex(
        (provider) => provider.provider === "jili"
      );
      if (jiliIndex !== -1) {
        state.casinoGameData[jiliIndex].games = action.payload;
        //Initialize
        state.providerData = state.casinoGameData[0];
        state.activeProvider = state.casinoGameData[0].provider;
      }
    },
  },
});

export const { setActiveProvider, setDynastyGaming, setJili } =
  CasinoSlice.actions;

export default CasinoSlice.reducer;
