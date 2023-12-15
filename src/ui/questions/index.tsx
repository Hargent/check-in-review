import { AppQuestions } from "../../data";
import Carousel from "../../components/carousel";
import QuestionCategory from "../../components/question-category";

export default function Questions() {
  return (
    <Carousel>
      <Carousel.Prev>
        <span className=" px-10 py-8 rounded-lg uppercase border border-green-500 text-green-500 transition-colors duration-300 ease-in-out hover:bg-green-500 hover:text-white ">
          prev
        </span>
      </Carousel.Prev>
      <Carousel.Window extendedClassNames="mx-auto py-6">
        <Carousel.Items>
          {AppQuestions.map((appQuestion, idx) => (
            <QuestionCategory key={`$--${idx}##$`} category={appQuestion} />
          ))}
        </Carousel.Items>
      </Carousel.Window>
      <Carousel.Next>
        <span className=" px-10 py-8 rounded-lg uppercase border border-green-500 text-green-500 transition-colors duration-300 ease-in-out hover:bg-green-500 hover:text-white ">
          Next
        </span>
      </Carousel.Next>
    </Carousel>
  );
}
