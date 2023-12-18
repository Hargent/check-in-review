import { Month, Teams } from "../../shared/enums";

import { ReviewItem } from "../../redux/slice/review-slice";
import { useAppSelector } from "../../shared/hooks";

export default function ResultsPage() {
  const results = useAppSelector((state) => state.review);
  const user = useAppSelector((state) => state.user);
  const reviewSubmitted = useAppSelector(
    (state) => state.review.reviewSubmitted
  );
  if (results.reviews.length === 0 || !reviewSubmitted.isSubmitted) {
    return <NoResult />;
  }

  return (
    <div>
      {/* header= team, week, month */}
      <div className=" flex  items-center justify-center flex-col space-y-3 font-bold text-2xl text-primary-100 pb-10 text-center">
        <p className=" capitalize">
          The review result for {results.team.week} of month{" "}
          {Month[results.team.month]} , {new Date().getFullYear()}
        </p>
        <p className=" capitalize">
          Filled by {user.username} from the {Teams[results.team.team]}{" "}
          department
        </p>
        <p>
          Time submitted :{" "}
          {`${new Date(reviewSubmitted.time).toLocaleTimeString()}` || ""}
        </p>
      </div>
      <div className=" flex flex-wrap items-center gap-4 w-full ss:w-4/5 lg:w-3/5 mx-auto">
        {results.reviews.map((item, idx) => (
          <div
            className=" flex flex-col items-center justify-center space-y-6"
            key={`#$@--${idx}-&&`}
          >
            <p className=" uppercase font-bold text-2xl text-primary-200">
              {item.category}
            </p>

            <ResultItems result={item.reviews} />
          </div>
        ))}
      </div>
      <p className=" text-lg text-primary-200 text-center py-10">
        Thanks for your co-operation.
      </p>
    </div>
  );
}
function NoResult() {
  return (
    <div className=" w-full flex items-center justify-center flex-col ">
      <p>No result found</p>
      <p>Please take the review and check back again</p>
    </div>
  );
}
function ResultItems({ result }: { result: ReviewItem[] }) {
  //
  return (
    <div className=" flex flex-col items-start justify-normal space-y-4">
      {result.map((item, idx) => (
        <div
          className=" flex flex-col items-start justify-center space-y-1 text-lg"
          key={`%%--${idx}-&&`}
        >
          <p className=" font-bold ">
            <span className=" font-bold text-xl text-primary-100">
              Question :{" "}
            </span>
            {item.question}
          </p>
          <p>
            <span className=" font-bold text-xl text-primary-100">
              Answer :{" "}
            </span>
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  );
}
