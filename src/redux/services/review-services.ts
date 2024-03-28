import { baseURL } from "@/app/_lib/baseURL";
import { Review } from "@/type";
import axios from "axios";

const getReviews = async (studioId: number) => {
  const response = await axios.get(baseURL + "data/reviews.json");
  const review = response.data.filter((r: Review) => r.studioId === studioId);
  return review;
};

const reviewService = {
  getReviews,
};

export default reviewService;
