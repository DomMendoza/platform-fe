import axios from "axios";

const baseURL = "http://54.169.218.142";
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

export default {
  bingoRedirect,
};
