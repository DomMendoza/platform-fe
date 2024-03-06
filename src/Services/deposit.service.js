import axios from "axios";

const baseURL = "http://54.169.218.142";

const cashin = async (amount, gateway_payment, token) => {
  const body = {
    amount,
  };

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.post(
      `${baseURL}/api/player/deposit?gateway_payment=${gateway_payment}`,
      body,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    // throw new Error("An error occurred while redirecting.");
  }
};

export default {
  cashin,
};
