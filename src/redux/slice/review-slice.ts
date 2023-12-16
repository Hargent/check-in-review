import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Month, Teams } from "../../shared/enums";

export interface ReviewState {
  team: {
    team: Teams;
    month: Month;
    week: string;
  };
}

const initialState: ReviewState = {
  team: {
    team: Teams.develop,
    month: Month.January,
    week: "week 1"
  }
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setUserTeam: (state, action: PayloadAction<{ team: Teams }>) => {
      state.team.team = action.payload.team;
    },
    setUserMonth: (state, action: PayloadAction<{ month: Month }>) => {
      state.team.month = action.payload.month;
    },
    setUserWeek: (state, action: PayloadAction<{ week: string }>) => {
      state.team.week = action.payload.week;
    }
  }
});

export const { setUserTeam, setUserMonth, setUserWeek } = reviewSlice.actions;
export default reviewSlice.reducer;
