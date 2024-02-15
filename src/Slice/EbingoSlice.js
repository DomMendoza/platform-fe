import { createSlice } from "@reduxjs/toolkit";

//Providers
import dg from "../Assets/dg.webp";
import jili from "../Assets/jili.webp";
import cq9 from "../Assets/cq9.webp";
import fachai from "../Assets/fachai.webp";
import jdb from "../Assets/jdb.webp";
import playtech_1 from "../Assets/playtech_1.webp";

const initialState = {
  ebingoGameData: [
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

const EbingoSlice = createSlice({
  name: "ebingo",
  initialState,
  reducers: {
    setActiveProvider: (state, action) => {
      const currentProvider = state.ebingoGameData.find(
        (item) => item.provider === action.payload
      );

      return {
        ...state,
        providerData: currentProvider ? currentProvider : {},
        activeProvider: action.payload,
      };
    },
    setDynastyGaming: (state, action) => {
      const dgIndex = state.ebingoGameData.findIndex(
        (provider) => provider.provider === "dg"
      );
      if (dgIndex !== -1) {
        state.ebingoGameData[dgIndex].games = action.payload;
        //Initialize
        state.providerData = state.ebingoGameData[0];
        state.activeProvider = state.ebingoGameData[0].provider;
      }
    },
    setJili: (state, action) => {
      const jiliIndex = state.ebingoGameData.findIndex(
        (provider) => provider.provider === "jili"
      );
      if (jiliIndex !== -1) {
        state.ebingoGameData[jiliIndex].games = action.payload;
        //Initialize
        state.providerData = state.ebingoGameData[0];
        state.activeProvider = state.ebingoGameData[0].provider;
      }
    },
  },
});

export const { setActiveProvider, setDynastyGaming, setJili } =
  EbingoSlice.actions;

export default EbingoSlice.reducer;
