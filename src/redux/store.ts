import { configureStore } from "@reduxjs/toolkit";
import studiosReducer from "../redux/slices/studio-slice";
import locationReducer from "../redux/slices/location-slice";
import reviewReducer from "../redux/slices/review-services";

const reducer = {
  studios: studiosReducer,
  location: locationReducer,
  review: reviewReducer,
};
export const store = configureStore({
  reducer: reducer,
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
