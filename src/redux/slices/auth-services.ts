import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import locationService from "../services/location-services";
import authService from "../services/auth-services";
import { User } from "@/type";

type InitialState = {
  data: User | null;
  status: boolean | null;
};
const initialState = {
  data: null,
  status: null,
} as InitialState;

export const login = createAsyncThunk(
  "LOGIN",
  async (e: { username: string; password: string }, thunkAPI) => {
    try {
      const data = await authService.getUser();
      const user = data.find(
        (d: User) => d.username === e.username && d.password === e.password
      );
      if (user) {
        return user;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error("ERROR AUTH SLICE");
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuth: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = true;
    });
    builder.addCase(login.pending, (state, action) => {
      state.data = null;
      state.status = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.data = null;
      state.status = false;
    });
  },
});
export const { resetAuth } = authSlice.actions;
export default authSlice.reducer;
