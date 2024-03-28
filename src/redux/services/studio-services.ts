import { baseURL } from "@/app/_lib/baseURL";
import { Studio } from "@/type";
import axios from "axios";

const getStudios = async () => {
  const response = await axios.get(baseURL + "data/studios.json");
  return response.data;
};
const getStudioDetail = async (id: string) => {
  const response = await axios.get(baseURL + "data/studios.json");
  const detail = response.data.find((e: Studio) => e.id === parseInt(id));
  return detail;
};
const studioService = {
  getStudios,
  getStudioDetail,
};

export default studioService;
