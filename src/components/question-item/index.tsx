import MyTextarea from "../textarea";

type Props = { question: string };

export default function QuestionItem({ question }: Props) {
  return (
    <div className="w-full flex flex-col items-start justify-start space-y-4 mx-auto">
      <p className=" text-xl font-medium">{question}</p>
      <MyTextarea />
    </div>
  );
}
