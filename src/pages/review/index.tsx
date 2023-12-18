import { useAppDispatch, useAppSelector } from "../../shared/hooks";

import { AppQuestions } from "../../data";
import ButtonPrimary from "../../components/button-primary/button-primary";
import Carousel from "../../components/carousel";
import QuestionCategory from "../../components/question-category";
import { setReviewSubmitted } from "../../redux/slice/review-slice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// import { getAnswersFromReviewState } from "../../utils/review";

// import { QuestionKeys } from "../../shared/enums";

export default function Reviews() {
  const reviews = useAppSelector((state) => state.review);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isTheEnd, setIsTheEnd] = useState(false);
  // const { isTheEnd } = useCarouselContext();
  // const isTheEnd = false;
  function handleSubmitReview() {
    dispatch(
      setReviewSubmitted({
        isSubmitted: true,
        time: new Date().getTime()
      })
    );
    navigate("/results");
    console.log("This are the reviews to be submitted : ", reviews);
    // console.log(getAnswersFromReviewState(reviews));
  }
  function handleGetNextState(arg: boolean) {
    setIsTheEnd(arg);
  }

  return (
    <div className=" ">
      <Carousel>
        <Carousel.Window extendedClassNames="mx-auto py-6">
          <Carousel.Items>
            {AppQuestions.map((appQuestion, idx) => (
              <QuestionCategory
                key={`$--${idx}##$`}
                category={appQuestion}
                getNextState={handleGetNextState}
              />
            ))}
          </Carousel.Items>
        </Carousel.Window>
        <div className="relative mt-10 px-4 flex items-center justify-between mx-auto w-full md:w-4/5 xl:w-3/5">
          <Carousel.Prev extendedClassNames="absolute left-0 disabled:opacity-0 disabled:pointer-event-none disabled:cursor-default px-4 py-3 rounded-lg uppercase border border-primary-200 text-primary-200 transition-colors duration-300 ease-in-out hover:bg-primary-200 hover:text-white">
            prev
          </Carousel.Prev>
          {isTheEnd ? (
            <div className="absolute  right-0 ">
              {/* <div className=" w-full flex items-center justify-end px-4 absolute bottom-[5rem] left-1/2 transform -translate-x-1/2 pt-5  mx-auto  md:w-4/5 xl:w-3/5"> */}
              <ButtonPrimary
                extendedClassNames="self-center bg-primary-200 text-primary-700 p-2 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary-100 active:shadow-none capitalize "
                onClick={handleSubmitReview}
              >
                Submit review
              </ButtonPrimary>
            </div>
          ) : (
            <Carousel.Next extendedClassNames="absolute  right-0 disabled:opacity-0 disabled:pointer-event-none disabled:cursor-default px-4 py-3 rounded-lg uppercase border border-primary-200 text-primary-200 transition-colors duration-300 ease-in-out hover:bg-primary-200 hover:text-white ">
              Next
            </Carousel.Next>
          )}
        </div>
      </Carousel>
    </div>
  );
}
