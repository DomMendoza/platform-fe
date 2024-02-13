import { createSlice } from "@reduxjs/toolkit";

//Providers
import jili from "../Assets/jili.webp";
import cq9 from "../Assets/cq9.webp";
import fachai from "../Assets/fachai.webp";
import jdb from "../Assets/jdb.webp";
import playtech_1 from "../Assets/playtech_1.webp";
import superAce from "../Assets/superAce.webp";

const initialState = {
  ebingoGameData: [
    {
      provider: "jili",
      logo: jili,
      games: [
        { name: "bingo-dragon_vs_tiger", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
      ],
      jackpot: 24654326,
    },
    {
      provider: "cq9",
      logo: cq9,
      games: [
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
      ],
      jackpot: 454324523,
    },
    {
      provider: "fachai",
      logo: fachai,
      games: [
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
      ],
      jackpot: 35467358,
    },
    {
      provider: "jdb",
      logo: jdb,
      games: [
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
      ],
      jackpot: 21315345,
    },
    {
      provider: "playtech",
      logo: playtech_1,
      games: [
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
        { name: "superAce", image: superAce },
      ],
      jackpot: 13436146,
    },
  ],
  providerData: {},
  activeProvider: "jili",
};

// Find the initial provider based on activeProvider
const initialProvider = initialState.ebingoGameData.find(
  (item) => item.provider === initialState.activeProvider
);
// Set providerData based on the initial provider
initialState.providerData = initialProvider ? initialProvider : {};

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
  },
});

export const { setActiveProvider } = EbingoSlice.actions;

export default EbingoSlice.reducer;
