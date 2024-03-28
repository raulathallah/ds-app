import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import locationService from "../services/location-services";

type CityState = {
  cityId: string;
  cityName: string;
};
type InitialState = {
  data: CityState[];
};
const initialState = {
  data: [],
} as InitialState;

export const getCity = createAsyncThunk("CITY_LIST", async (_, thunkAPI) => {
  try {
    const data = await locationService.getCity();
    return data;
  } catch (error) {
    throw new Error("ERROR LOCATION SLICE");
  }
});

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCity.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getCity.pending, (state, action) => {
      state.data = [];
    });
    builder.addCase(getCity.rejected, (state, action) => {
      state.data = [];
    });
  },
});

export default citySlice.reducer;
