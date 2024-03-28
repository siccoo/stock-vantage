import axios from "axios";

const API_KEY = "RIBXT3XYLI69PC0Q";
const API_URL = "https://www.alphavantage.co/query";

const apiRequest = async () => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        function: "TIME_SERIES_INTRADAY",
        symbol: "AAPL",
        interval: "5min",
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Error fetching data. Please try again later.");
  }
};

export default apiRequest;
