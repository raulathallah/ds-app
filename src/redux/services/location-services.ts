import { baseURL } from "@/app/_lib/baseURL";
import axios from "axios";

const getCity = async () => {
  const response = await axios.get(baseURL + "data/city.json");
  return response.data;
};

const locationService = {
  getCity,
};

export default locationService;
