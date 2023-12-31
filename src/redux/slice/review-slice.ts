import { Month, Teams } from "../../shared/enums";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
  reviewSubmitted: { isSubmitted: boolean; time: number };
}

const initialState: ReviewState = {
  team: {
    team: Teams.develop,
    month: Month.January,
    week: "week 1"
  },
  reviews: [],
  reviewSubmitted: { isSubmitted: false, time: 0 }
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
      // (action.);
      // remove if it exists
      const newState = state.reviews.filter(
        (review) => review.category !== action.payload.reviews.category
      );
      // update state
      state.reviews = [...newState, action.payload.reviews].filter(
        (review) => review.category
      );
    },
    setReviewSubmitted: (
      state,
      action: PayloadAction<{ isSubmitted: boolean; time: number }>
    ) => {
      state.reviewSubmitted.isSubmitted = action.payload.isSubmitted;
      state.reviewSubmitted.time = action.payload.time;
    }
  }
});

export const {
  setUserTeam,
  setUserMonth,
  setUserWeek,
  setUserReview,
  setReviewSubmitted
} = reviewSlice.actions;
export default reviewSlice.reducer;
