import ButtonPrimary from "../../components/button-primary/button-primary";
import { ModalId } from "../../shared/enums";
import { ScaleLoader } from "react-spinners";
import { TimeDelay } from "../../shared/constants";
import { useEffect } from "react";
import { useModalAutoTrigger } from "../../components/modal/use-modal";
import { useModalPreload } from "../../shared/hooks/use-modal-preload/use-modal-preload";
import { useUserLogout } from "../../services/hooks/auth";

// import { useAppDispatch } from "../../shared/hooks";
// import { logoutUser as setUserLogout } from "../../redux/slice/auth-slice";

export default function Logout() {
  const { autoTriggerModal } = useModalAutoTrigger();
  // const dispatch = useAppDispatch();

  const { isSuccess, isLoggingOut, logoutUser, logoutError } = useUserLogout();
  const handleUserLogout = () => {
    logoutUser();
  };
  useEffect(() => {
    if (!isSuccess) return;
    autoTriggerModal({ action: "close", id: ModalId.Logout });
  }, [autoTriggerModal, isSuccess]);
  const handleCancel = () => {
    autoTriggerModal({ action: "close", id: ModalId.Logout });
  };
  const isModalLoading = useModalPreload(TimeDelay);

  if (isModalLoading) {
    return (
      <ScaleLoader
        color="rgb(0 95 73)"
        height={50}
        width={5}
        className=" text-6xl text-center mx-auto !text-primary-100"
      />
    );
  }
  return (
    <div className=" text-white flex flex-col items-center justify-center bg-primary-100  rounded-xl  mx-auto p-10 space-y-10 w-4/5 md:w-3/5 lg:w-4/5  shadow-2xl">
      <p className=" font-bold text-lg lg:text-2xl uppercase tracking-wider">
        Confirm logout
      </p>
      {logoutError && (
        <div className="self-center">
          <p className=" w-full  text-center text-red-500 text-sm font-bold">
            {`${logoutError || ""}`}
          </p>
        </div>
      )}
      <div className=" flex w-full items-center justify-between">
        <ButtonPrimary
          onClick={handleCancel}
          extendedClassNames=" text-white px-4 py-2 capitalize font-semibold  hover:border hover:border-solid hover:border-white rounded-lg"
        >
          Cancel
        </ButtonPrimary>
        <ButtonPrimary
          disabled={isLoggingOut}
          onClick={handleUserLogout}
          extendedClassNames=" text-white flex item-center justify-center space-x-2 px-4 py-2 capitalize font-semibold  border border-white hover:bg-white hover:text-gray-600 rounded-lg"
        >
          {isLoggingOut && (
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
