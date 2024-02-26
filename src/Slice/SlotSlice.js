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
      link: "https://uat.888bingo.ph/api/games/1671070084897",
      jackpot: 24654326,
    },
    {
      provider: "jili",
      logo: jili,
      link: "https://uat.888bingo.ph/api/games/1671070084897",
      jackpot: 24654326,
    },
    {
      provider: "cq9",
      logo: cq9,
      link: "https://uat.888bingo.ph/api/games/1671070084897",
      jackpot: 454324523,
    },
    {
      provider: "fachai",
      logo: fachai,
      link: "https://uat.888bingo.ph/api/games/1671070084897",
      jackpot: 35467358,
    },
    {
      provider: "jdb",
      logo: jdb,
      link: "https://uat.888bingo.ph/api/games/1671070084897",
      jackpot: 21315345,
    },
    {
      provider: "playtech",
      logo: playtech_1,
      link: "https://uat.888bingo.ph/api/games/1671070084897",
      jackpot: 13436146,
    },
  ], //assets of each provider
  gameData: [], //array of games
  active: {}, //selected provider and its link
};

const SlotSlice = createSlice({
  name: "slots",
  initialState,
  reducers: {
    setActive: (state, action) => {
      const { provider, link } = action.payload;
      state.active = { provider, link };
    },
    setGameData: (state, action) => {
      state.gameData = action.payload;
    },
  },
});

export const { setActive, setGameData } = SlotSlice.actions;

export default SlotSlice.reducer;
