import axios from "axios";

const getStudios = async () => {
  const response = await axios.get("data/studios.json");
  return response.data;
};

const studioService = {
  getStudios,
};

export default studioService;
