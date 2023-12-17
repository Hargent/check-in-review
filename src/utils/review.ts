import { QuestionKeys } from "../shared/enums";
import { ReviewState } from "../redux/slice/review-slice";

export const getAnswersFromReviewState = (
  reviewState: ReviewState
  //   keys: QuestionKeys
): Record<string, string> => {
  const result: Record<string, string> = {};

  // Iterate through each key in the QuestionKeys enum
  for (const key of Object.keys(QuestionKeys)) {
    // Find the corresponding category and question in the ReviewState
    const foundReview = reviewState.reviews.find((review) =>
      review.reviews.some((item) => {
        if (
          !isNaN(
            Number(
              `${QuestionKeys[QuestionKeys[key as keyof typeof QuestionKeys]]}`
                .split("_")
                .join(" ")
                .toLowerCase()
            )
          )
        ) {
          return;
        }

        console.log(
          `${QuestionKeys[QuestionKeys[key as keyof typeof QuestionKeys]]}`
            .split("_")
            .join(" ")
            .toLowerCase(),
          item.question.toLowerCase()
        );
        return (
          item.question.toLowerCase() ===
          `${QuestionKeys[QuestionKeys[key as keyof typeof QuestionKeys]]}`
            .split("_")
            .join(" ")
            .toLowerCase()
        );
      })
    );

    // If found, get the answer and add it to the result
    if (foundReview) {
      const foundItem = foundReview.reviews.find(
        (item) =>
          item.question.toLowerCase() ===
          `${QuestionKeys[QuestionKeys[key as keyof typeof QuestionKeys]]}`
            .split("_")
            .join(" ")
            .toLowerCase()
      );
      if (foundItem) {
        result[QuestionKeys[key as keyof typeof QuestionKeys]] =
          foundItem.answer;
      }
    }
  }

  return result;
};

// export const getAnswersFromReviewState = (
//   reviewState: ReviewState,
//   data: Record<string, string>
// ): Record<string, string> => {
//   const result: Record<string, string> = {};

//   // Iterate through each key in the data object
//   for (const key in data) {
//     // Find the corresponding category and question in the ReviewState
//     const foundReview = reviewState.reviews.find((review) =>
//       review.reviews.some(
//         (item) => item.category.toLowerCase() === key.toLowerCase()
//       )
//     );

//     // If found, get the answer and add it to the result
//     if (foundReview) {
//       const foundItem = foundReview.reviews.find(
//         (item) => item.category.toLowerCase() === key.toLowerCase()
//       );
//       if (foundItem) {
//         result[key] = foundItem.answer;
//       }
//     }
//   }

//   return result;
// };
