import axios from "axios";

const baseURL = "https://api.unsplash.com/";
const API_KEY = "Py15uzC0Xn7yRM4-OndTTL8oCO_Mfzx4bC_x14X8MLk";

type TImage = {
  id: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
  };
};

type ApiResponse = {
  total: number;
  total_pages: number;
  results: TImage[];
};

export const getImages = async (
  query: string,
  page: number
): Promise<TImage[]> => {
  try {
    const params = {
      query,
      client_id: API_KEY,
      page,
    };

    const response = await axios.get<ApiResponse>(`${baseURL}/search/photos`, {
      params,
    });
    console.log(response.data);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
