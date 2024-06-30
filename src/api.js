import axios from "axios";

const baseURL = "https://api.unsplash.com/";
const API_KEY = "Py15uzC0Xn7yRM4-OndTTL8oCO_Mfzx4bC_x14X8MLk";

export const getImages = async (topic, page) => {
  const response = await axios.get(`${baseURL}/search/photos`, {
    params: {
      query: topic,
      client_id: API_KEY,
      page,
    },
  });
  console.log(response.data);

  return response.data.results;
};
