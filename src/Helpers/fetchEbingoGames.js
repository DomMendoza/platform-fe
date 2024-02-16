import { setProviderGames } from "../Slice/EbingoSlice";
import gamesService from "../Services/games.service";

const fetchEbingoGames = async (dispatch) => {
  //FETCH DG GAMES
  const dgResult = await gamesService.getDynastyGaming();
  if (dgResult) {
    const classic = dgResult.data.classic;
    const variant = dgResult.data.variant;
    const dgData = [...classic, ...variant];
    dispatch(setProviderGames({ provider: "dg", games: dgData }));
  } else {
    console.error("An error has occurred fetching the data.");
  }

  //FETCH JILI GAMES
  const jiliResult = await gamesService.getDynastyGaming();
  if (jiliResult) {
    const classic = jiliResult.data.classic;
    const variant = jiliResult.data.variant;
    const jiliData = [...classic, ...variant];
    dispatch(setProviderGames({ provider: "jili", games: jiliData }));
  } else {
    console.error("An error has occurred fetching the data.");
  }
};

export default fetchEbingoGames;
