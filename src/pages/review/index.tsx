import { AppQuestions } from "../../data";
import ButtonPrimary from "../../components/button-primary/button-primary";
import Carousel from "../../components/carousel";
import QuestionCategory from "../../components/question-category";
import { useAppSelector } from "../../shared/hooks";
import { useState } from "react";

// import { getAnswersFromReviewState } from "../../utils/review";

// import { QuestionKeys } from "../../shared/enums";

export default function Reviews() {
  const reviews = useAppSelector((state) => state.review);
  const [isTheEnd, setIsTheEnd] = useState(false);
  // const { isTheEnd } = useCarouselContext();
  // const isTheEnd = false;
  function handleSubmitReview() {
    console.log("This are the reviews to be submitted : ", reviews);
    // console.log(getAnswersFromReviewState(reviews));
  }
  function handleGetNextState(arg: boolean) {
    setIsTheEnd(arg);
  }

  return (
    <>
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
        <div className="px-4 absolute bottom-[5rem] left-1/2 transform -translate-x-1/2 pt-5 flex items-center justify-between mx-auto w-full md:w-4/5 xl:w-3/5">
          <Carousel.Prev extendedClassNames="disabled:opacity-0 disabled:pointer-event-none disabled:cursor-default px-4 py-3 rounded-lg uppercase border border-primary-200 text-green-500 transition-colors duration-300 ease-in-out hover:bg-green-500 hover:text-white">
            prev
          </Carousel.Prev>
          <Carousel.Next extendedClassNames="disabled:opacity-0 disabled:pointer-event-none disabled:cursor-default  px-4 py-3 rounded-lg uppercase border border-primary-200 text-green-500 transition-colors duration-300 ease-in-out hover:bg-green-500 hover:text-white ">
            Next
          </Carousel.Next>
        </div>
        {isTheEnd && (
          <div className=" w-full flex items-center justify-end px-4 absolute bottom-[5rem] left-1/2 transform -translate-x-1/2 pt-5  mx-auto  md:w-4/5 xl:w-3/5">
            <ButtonPrimary
              extendedClassNames="self-center bg-primary-200 text-primary-700 p-2 rounded-lg"
              onClick={handleSubmitReview}
            >
              Submit review
            </ButtonPrimary>
          </div>
        )}
      </Carousel>
    </>
  );
}
