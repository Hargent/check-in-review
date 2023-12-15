// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../app/store";

import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface AuthState {
  isLoggedIn: boolean;
}

// Define the initial state using that type
const initialState: AuthState = {
  isLoggedIn: false
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loginUser: (state) => {
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      console.log("logging out user now....");
      state.isLoggedIn = false;
    }
  }
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
