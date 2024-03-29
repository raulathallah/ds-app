import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import studioService from "../services/studio-services";
import { Favorite } from "@/type";

type StudioState = {
  id: number;
  name: string;
  address: string;
  cityId: string;
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
  detail: StudioState | null;
  favorite: Favorite[];
};
const initialState = {
  data: [],
  detail: null,
  favorite: [],
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
export const getStudioDetail = createAsyncThunk(
  "STUDIO_DETAIL",
  async (id: string, thunkAPI) => {
    try {
      const data = await studioService.getStudioDetail(id);
      return data;
    } catch (error) {
      throw new Error("ERROR STUDIO SLICE");
    }
  }
);
export const getFavoriteStudio = createAsyncThunk(
  "STUDIO_FAVORITE",
  async (id: number, thunkAPI) => {
    try {
      const data = await studioService.getFavoriteStudio(id);
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
    builder.addCase(getStudioDetail.fulfilled, (state, action) => {
      state.detail = action.payload;
    });
    builder.addCase(getStudioDetail.pending, (state, action) => {
      state.detail = null;
    });
    builder.addCase(getStudioDetail.rejected, (state, action) => {
      state.detail = null;
    });
    builder.addCase(getFavoriteStudio.fulfilled, (state, action) => {
      state.favorite = action.payload;
    });
    builder.addCase(getFavoriteStudio.pending, (state, action) => {
      state.favorite = [];
    });
    builder.addCase(getFavoriteStudio.rejected, (state, action) => {
      state.favorite = [];
    });
  },
});

export default studioSlice.reducer;
