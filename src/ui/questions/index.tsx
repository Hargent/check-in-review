import { AppQuestions } from "../../data";
import Carousel from "../../components/carousel";
import QuestionCategory from "../../components/question-category";

export default function Questions() {
  return (
    <Carousel>
      <Carousel.Prev>
        <span>prev</span>
      </Carousel.Prev>
      <Carousel.Window extendedClassNames="">
        <Carousel.Items>
          {AppQuestions.map((appQuestion, idx) => (
            <QuestionCategory key={`$--${idx}##$`} category={appQuestion} />
          ))}
        </Carousel.Items>
      </Carousel.Window>
      <Carousel.Next>Next</Carousel.Next>
    </Carousel>
  );
}
