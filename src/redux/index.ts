import authReducer from "./slice/auth-slice";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/user-slice";
import reviewReducer from "./slice/review-slice";

// ...

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    review: reviewReducer
  },
  devTools: true
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
