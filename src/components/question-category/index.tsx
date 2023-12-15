import QuestionItem from "../question-item";

type Props = {
  category: { category: string; questions: string[] };
};

export default function QuestionCategory({ category }: Props) {
  return (
    <div className=" flex flex-col items-start justify-start space-y-4">
      <header className=" self-center font-bold text-3l uppercase">
        {category.category}
      </header>
      <div className="">
        {category.questions.map((question, idx) => (
          <QuestionItem key={`${idx}--$&`} question={question} />
        ))}
      </div>
    </div>
  );
}
