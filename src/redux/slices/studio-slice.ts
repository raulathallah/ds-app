import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import studioService from "../services/studio-services";

type StudioState = {
  id: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  instagram: string;
  image: string[];
  isAC: boolean;
  isSpeaker: boolean;
  isRGB: boolean;
  isProperties: boolean;
  logo: string;
  rent: number;
};
type InitialState = {
  data: StudioState[];
};
const initialState = {
  data: [],
} as InitialState;

export const getStudios = createAsyncThunk(
  "STUDIO_LIST",
  async (_, thunkAPI) => {
    try {
      const data = await studioService.getStudios();
      return data;
    } catch (error) {
      throw new Error("ERROR STUDIO SLICE");
    }
  }
);

export const studioSlice = createSlice({
  name: "studio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStudios.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getStudios.pending, (state, action) => {
      state.data = [];
    });
    builder.addCase(getStudios.rejected, (state, action) => {
      state.data = [];
    });
  },
});

export default studioSlice.reducer;
