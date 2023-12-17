import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Month, Teams } from "../../shared/enums";
// {
//   "id": 0,
//   "department": "develop",
//   "week_ending": "2023-12-17",
//   "task_execution_completed": "string",
//   "task_execution_challenges": "string",
//   "task_execution_examples": "string",
//   "creativity_demonstrated": "string",
//   "creativity_approach": "string",
//   "creativity_instances": "string",
//   "communication_effectiveness": "string",
//   "communication_clarity": "string",
//   "communication_participation": "string",
//   "collaboration_willingness": "string",
//   "collaboration_examples": "string",
//   "collaboration_contribution": "string",
//   "initiative_proactive": "string",
//   "initiative_instances": "string",
//   "initiative_areas": "string",
//   "adaptability_well": "string",
//   "adaptability_challenges": "string",
//   "adaptability_examples": "string",
//   "technical_skills_proficiency": "string",
//   "technical_skills_improvement": "string",
//   "technical_skills_assistance": "string",
//   "problem_solving_examples": "string",
//   "problem_solving_support": "string",
//   "time_management_efficiency": "string",
//   "time_management_challenges": "string",
//   "time_management_prioritization": "string",
//   "professionalism_punctuality": "string",
//   "professionalism_concerns": "string",
//   "professionalism_examples": "string",
//   "strengths": "string",
//   "areas_for_improvement": "string",
//   "specific_goals": "string",
//   "team_support": "string",
//   "overall_score": 9223372036854776000,
//   "overall_score_factors": "string",
//   "user": "user@example.com"
// }
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
      // (action.);
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
