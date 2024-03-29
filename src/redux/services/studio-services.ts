import { baseURL } from "@/app/_lib/baseURL";
import { Favorite, Studio } from "@/type";
import axios from "axios";

const getStudios = async () => {
  const response = await axios.get(baseURL + "data/studios.json");
  return response.data;
};
const getFavoriteStudio = async (userId: number) => {
  const response = await axios.get(baseURL + "data/favorite.json");
  const favList = response.data.filter(
    (fav: Favorite) => fav.userId === userId
  );
  return favList;
};
const getStudioDetail = async (id: string) => {
  const response = await axios.get(baseURL + "data/studios.json");
  const detail = response.data.find((e: Studio) => e.id === parseInt(id));
  return detail;
};
const studioService = {
  getStudios,
  getStudioDetail,
  getFavoriteStudio,
};

export default studioService;
