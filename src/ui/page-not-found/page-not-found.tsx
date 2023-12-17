import { useMoveBack } from "../../shared/hooks/use-move-back/use-move-back";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <div className=" w-full flex items-center justify-center space-y-6 text-center h-screen">
      <div>
        <h1>The page you are looking for could not be found 😢</h1>
        <button
          onClick={moveBack}
          className=" text-primary-200 border-primary-100 transition-colors duration-500 ease-in-out rounded-lg py-2 px-4 hover:bg-primary-200 hover:text-primary-500 mt-6"
        >
          &larr; Go back
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
