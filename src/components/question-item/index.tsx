import MyTextarea from "../textarea";

type Props = {
  question: string;
  getUserAnswer: (question: string, answer: string) => void;
};

export default function QuestionItem({ question, getUserAnswer }: Props) {
  function getTextAreaInput(val: string) {
    getUserAnswer(question, val);
  }
  return (
    <div className="w-full flex flex-col items-start justify-start space-y-4 mx-auto">
      <p className=" text-xl font-medium text-center w-full md:w-4/5 mx-auto">
        {question}
      </p>
      <MyTextarea getUserAnswer={getTextAreaInput} question={question} />
    </div>
  );
}
