import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  pk: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

const initialState: UserState = {
  pk: "",
  username: "",
  email: "",
  first_name: "",
  last_name: ""
};

export const userSlice = createSlice({
  name: "user", // Corrected the name to "user" instead of "auth"
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
    deleteUser: () => {
      return { ...initialState };
    }
  }
});

export const { saveUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
