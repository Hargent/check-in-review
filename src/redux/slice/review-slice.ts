import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Month, Teams } from "../../shared/enums";

export type ReviewItem = { answer: string; category: string; question: string };
export type Review = {
  category: string;
  reviews: ReviewItem[];
};
export interface ReviewState {
  team: {
    team: Teams;
    month: Month;
    week: string;
  };
  reviews: Review[];
}

const initialState: ReviewState = {
  team: {
    team: Teams.develop,
    month: Month.January,
    week: "week 1"
  },
  reviews: []
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
    },
    setUserReview: (state, action: PayloadAction<{ reviews: Review }>) => {
      // console.log(action.);
      // remove if it exists
      const newState = state.reviews.filter(
        (review) => review.category !== action.payload.reviews.category
      );
      // update state
      state.reviews = [...newState, action.payload.reviews].filter(
        (review) => review.category
      );
    }
  }
});

export const { setUserTeam, setUserMonth, setUserWeek, setUserReview } =
  reviewSlice.actions;
export default reviewSlice.reducer;
