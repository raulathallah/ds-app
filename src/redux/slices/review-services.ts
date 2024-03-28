import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import locationService from "../services/location-services";
import reviewService from "../services/review-services";

type ReviewState = {
  id: string;
  studioId: number;
  username: string;
  reviews: string;
  rating: string;
};

type InitialState = {
  data: ReviewState[];
};
const initialState = {
  data: [],
} as InitialState;

export const getReviews = createAsyncThunk(
  "REVIEW_LIST",
  async (studioId: number, thunkAPI) => {
    try {
      const data = await reviewService.getReviews(studioId);
      return data;
    } catch (error) {
      throw new Error("ERROR REVIEW SLICE");
    }
  }
);

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReviews.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getReviews.pending, (state, action) => {
      state.data = [];
    });
    builder.addCase(getReviews.rejected, (state, action) => {
      state.data = [];
    });
  },
});

export default reviewSlice.reducer;
