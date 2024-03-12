import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;
const api_key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgwYTIzNmMwLTkxMzAtNGI4NC1iYjQwLTBlODlmMWI1YWUxYSIsIm5hbWUiOiJNZWdhYmluZ28iLCJpYXQiOjE2NzM5MzU3NzR9.OQim1QvWGmhuxN_E6Bh-Wf6ev0zJY7lEBhamexbebD8";

const bingoRedirect = async (game, user_id, token) => {
  try {
    const response = await axios.post(
      `${baseURL}/redirect/breddas/game-url?game=${game}&user_id=${user_id}&api_key=${api_key}&token=${token}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    // throw new Error("An error occurred while redirecting.");
  }
};

const getDynastyGaming = async () => {
  try {
    const response = await axios.get(
      "https://uat.888bingo.ph/api/games/1671070084897"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    // throw new Error("An error occurred while redirecting.");
  }
};

export default {
  bingoRedirect,
  getDynastyGaming,
};
