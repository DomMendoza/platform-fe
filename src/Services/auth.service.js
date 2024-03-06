import axios from "axios";

const baseURL = "http://54.169.218.142/api";

const registerUser = async (
  username,
  password,
  // name,
  email,
  phone
  // birthdate
) => {
  const body = { username, password, email, phone };

  try {
    const response = await axios.post(`${baseURL}/register/player`, body);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occured while registering user.");
  }
};

const loginUser = async (username, password) => {
  const body = {
    username,
    password,
  };

  try {
    const response = await axios.post(`${baseURL}/login/player`, body);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const verifyUser = async (player_id, otpsent) => {
  try {
    const response = await axios.post(
      `${baseURL}/verify/player?player_id=${player_id}&otpsent=${otpsent}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while verifying your account.");
  }
};

export default {
  registerUser,
  loginUser,
  verifyUser,
};
