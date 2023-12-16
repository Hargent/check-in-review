import { ScaleLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <ScaleLoader className=" text-4xl text-center mx-auto text-gray-600" />
    </div>
  );
}
