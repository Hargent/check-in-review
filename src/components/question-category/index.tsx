import QuestionItem from "../question-item";

type Props = {
  category: { category: string; questions: string[] };
};

export default function QuestionCategory({ category }: Props) {
  return (
    <div>
      <header>{category.category}</header>
      <div className="">
        {category.questions.map((question, idx) => (
          <QuestionItem key={`${idx}--$&`} question={question} />
        ))}
      </div>
    </div>
  );
}
