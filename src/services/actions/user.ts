import { GetHeaders } from "./axios";
import { ReviewState } from "../../redux/slice/review-slice";
import axios from "axios";

async function fetchUser() {
  try {
    const response = await axios.get(
      "https://check-in-review.onrender.com/api/user/",
      {
        headers: GetHeaders()
      }
    );
    response;
    return response;
  } catch (err) {
    const errr = err as {
      [key: string]: { [key: string]: { [key: string]: [] } };
    };
    const error = errr?.response?.data?.non_field_errors?.at(0);
    throw new Error(error);
  }
}

async function submitReview(review: ReviewState) {
  console.log(review);
  const reviewData = {};
  try {
    const response = await axios.post(
      "https://check-in-review.onrender.com/api/review/",
      reviewData,
      {
        headers: GetHeaders()
      }
    );
    response;
    return response;
  } catch (err) {
    const errr = err as {
      [key: string]: { [key: string]: { [key: string]: [] } };
    };
    const error = errr?.response?.data?.non_field_errors?.at(0);
    throw new Error(error);
  }
}

export { fetchUser, submitReview };
// {
//   "id": 0,
//   "department": "develop",
//   "week_ending": "2023-12-17",
//
//   "overall_score": 9223372036854776000,
//   "overall_score_factors": "string",
//   "user": "user@example.com"
// }
