import { ModalId } from "../../shared/enums";
import { TimeDelay } from "../../shared/constants";
import { useModalPreload } from "../../shared/hooks/use-modal-preload/use-modal-preload";
import ButtonPrimary from "../../components/button-primary/button-primary";
import { ScaleLoader } from "react-spinners";
import { useModalAutoTrigger } from "../../components/modal/use-modal";
import { useAppDispatch } from "../../shared/hooks";
import { logoutUser } from "../../redux/slice/auth-slice";

export default function Logout() {
  const { autoTriggerModal } = useModalAutoTrigger();
  const dispatch = useAppDispatch();

  const handleUserLogout = () => {
    console.log("logging out...");

    dispatch(logoutUser());

    autoTriggerModal({ action: "close", id: ModalId.Logout });
  };
  const handleCancel = () => {
    autoTriggerModal({ action: "close", id: ModalId.Logout });
  };
  const isModalLoading = useModalPreload(TimeDelay);

  const isLoading = false;
  if (isModalLoading) {
    return (
      <ScaleLoader className=" text-4xl text-center mx-auto text-green-600" />
    );
  }
  return (
    <div className=" text-white flex flex-col items-center justify-center bg-green-400  rounded-lg  mx-auto p-10 space-y-10 w-1/2">
      <p className=" font-bold text-2xl uppercase tracking-wider">
        Confirm logout
      </p>
      <div className=" flex w-full items-center justify-between">
        <ButtonPrimary
          onClick={handleCancel}
          extendedClassNames=" text-white px-4 py-2 capitalize font-semibold  hover:border hover:border-solid hover:border-white rounded-lg"
        >
          Cancel
        </ButtonPrimary>
        <ButtonPrimary
          onClick={handleUserLogout}
          extendedClassNames=" text-white flex item-center justify-center space-x-2 px-4 py-2 capitalize font-semibold  border border-white hover:bg-white hover:text-green-600 rounded-lg"
        >
          {isLoading && (
            <ScaleLoader
              color="#fff"
              height={16}
              speedMultiplier={1}
              margin={2}
              width={3}
            />
          )}
          <span>confirm</span>
        </ButtonPrimary>
      </div>
    </div>
  );
}
