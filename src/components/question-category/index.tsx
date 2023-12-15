import { useEffect, useState } from "react";

import { CSSTransition } from "react-transition-group";
import QuestionItem from "../question-item";
import { useCarouselContext } from "../../shared/hooks";

type Props = {
  category: { category: string; questions: string[] };
};

export default function QuestionCategory({ category }: Props) {
  const [inProp, setInProp] = useState(false);
  const { animDir } = useCarouselContext();
  // const direction = "left";
  useEffect(() => {
    setInProp(true); // Trigger animation on mount
    return () => setInProp(false); // Trigger animation on mount
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
        <header className=" self-center font-bold text-3xl uppercase transition-all duration-300 ease-in-out hover:text-transparent hover:bg-gradient-to-r from-green-300 to-green-700 cursor-default hover:bg-clip-text">
          {category.category}
        </header>
        <div className=" w-4/5 mx-auto">
          <div className="flex flex-col items-start space-y-8">
            {category.questions.map((question, idx) => (
              <QuestionItem key={`${idx}--$&`} question={question} />
            ))}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
