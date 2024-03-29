import { baseURL } from "@/app/_lib/baseURL";
import axios from "axios";

const getUser = async () => {
  const response = await axios.get(baseURL + "data/user.json");
  return response.data;
};

const authService = {
  getUser,
};

export default authService;
