import { useMoveBack } from "../../shared/hooks/use-move-back/use-move-back";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <div>
      <div>
        <h1>The page you are looking for could not be found 😢</h1>
        <button onClick={moveBack}>&larr; Go back</button>
      </div>
    </div>
  );
}

export default PageNotFound;
