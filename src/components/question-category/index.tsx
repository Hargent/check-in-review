import { useEffect, useState } from "react";

import { CSSTransition } from "react-transition-group";
import QuestionItem from "../question-item";
import {
  useAppDispatch,
  // useAppSelector,
  useCarouselContext
} from "../../shared/hooks";
import {
  Review,
  ReviewItem,
  setUserReview
} from "../../redux/slice/review-slice";

type Props = {
  category: { category: string; questions: string[] };
  getNextState: (arg: boolean) => void;
};

export default function QuestionCategory({ category, getNextState }: Props) {
  const [inProp, setInProp] = useState(false);
  const { animDir, isTheEnd } = useCarouselContext();

  const dispatch = useAppDispatch();
  const [questionAndAnswer, setQuestionAndAnswer] = useState<Review>(
    {} as Review
  );
  useEffect(() => {
    getNextState(isTheEnd);
  }, [getNextState, isTheEnd]);

  // const direction = "left";
  const [current, setCurrent] = useState("");
  function getUserAnswer(question: string, answer: string) {
    const newItem: ReviewItem = {
      answer: answer,
      category: category.category,
      question: question
    };

    const isExist =
      questionAndAnswer?.reviews?.filter(
        (item) =>
          item.category === newItem.category &&
          item.question === newItem.question
      ).length > 0 || false;
    if (isExist === false) {
      const oldReviews = questionAndAnswer?.reviews ?? [];

      const newReviews = [...oldReviews, newItem];
      setQuestionAndAnswer({
        category: category.category,
        reviews: newReviews
      });
    }
    if (isExist === true) {
      const oldReviews = questionAndAnswer?.reviews.filter(
        (review) => review.question !== newItem.question
      );

      const newReviews = [...oldReviews, newItem];

      setQuestionAndAnswer({
        category: category.category,
        reviews: newReviews
      });
    }
  }
  useEffect(() => {
    setCurrent(category.category);
    return () => {
      if (category.category !== current) return;
      dispatch(setUserReview({ reviews: questionAndAnswer }));
    };
  }, [category.category, current, dispatch, questionAndAnswer]);

  useEffect(() => {
    setInProp(true); // Trigger animation on mount
    return () => {
      setInProp(false);
    }; // Trigger animation on mount
  }, []);
  return (
    <CSSTransition
      in={inProp}
      timeout={300}
      classNames={`fade-${animDir}`}
      unmountOnExit
    >
      {/* <CSSTransition in={inProp} timeout={300} classNames="fade"> */}
      <div className="animated flex flex-col items-start justify-start space-y-8">
        <header className=" self-center font-bold text-3xl uppercase transition-all duration-300 ease-in-out hover:text-transparent hover:bg-gradient-to-r from-gray-300 to-gray-700 cursor-default hover:bg-clip-text">
          {category.category}
        </header>
        <div className="w-full ss:w-4/5 mx-auto">
          <div className="flex flex-col items-start space-y-8">
            {category.questions.map((question, idx) => (
              <QuestionItem
                key={`${idx}--$&`}
                question={question}
                getUserAnswer={getUserAnswer}
              />
            ))}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
