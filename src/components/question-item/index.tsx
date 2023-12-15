type Props = { question: string };

export default function QuestionItem({ question }: Props) {
  return (
    <div className=" flex flex-col items-start justify-start space-y-4">
      <p>{question}</p>
      <textarea className=" w-full p-3 rounded-lg "></textarea>
    </div>
  );
}
