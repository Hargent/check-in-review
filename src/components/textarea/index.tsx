import React from "react";
import { useAppSelector } from "../../shared/hooks";
type TextAreaProp = {
  getUserAnswer: (arg: string) => void;
  question: string;
};
const MyTextarea: React.FC<TextAreaProp> = ({ getUserAnswer, question }) => {
  const savedData = useAppSelector((state) =>
    state.review.reviews.find((review) =>
      review.reviews.find((review) => review.question === question)
    )
  );
  const savedAnswer = savedData?.reviews.at(0)?.answer;

  return (
    <textarea
      defaultValue={savedAnswer}
      id="myTextarea"
      rows={2}
      onChange={(e) => getUserAnswer(e.target.value)}
      className={`resize-none transition-all duration-300
      } border border-gray-500 rounded-lg p-2 w-4/5 mx-auto w-full md:w-4/5 outline-none focus-visible:border-gray-500 `}
      // } border border-gray-500 rounded-lg p-2 w-3/5 focus:w-full outline-none focus-visible:border-gray-500 `}
      placeholder="Type here..."
    />
  );
};

export default MyTextarea;
