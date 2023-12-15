import { SubmitHandler, useForm } from "react-hook-form";
import { useModalPreload } from "../../shared/hooks/use-modal-preload/use-modal-preload";
import { ScaleLoader } from "react-spinners";
import { TimeDelay } from "../../shared/constants";
import ButtonPrimary from "../../components/button-primary/button-primary";
// import { useAppDispatch } from "../../shared/hooks";
// import { loginUser as setUserLogin } from "../../redux/slice/auth-slice";
import { useUserLogin } from "../../services/hooks/auth";
import Modal from "../../components/modal/modal";
import { ModalId } from "../../shared/enums";
import { LoginData } from "../../services/types";
import { useModalAutoTrigger } from "../../components/modal/use-modal";
import { useEffect } from "react";

// import Register from "../register";

export default function Login() {
  const {
    register,
    handleSubmit,
    // clearErrors,
    formState: { errors }
  } = useForm<LoginData>();

  // const dispatch = useAppDispatch();
  const { isSuccess, isLoggingIn, loginError, loginUser } = useUserLogin();
  const { autoTriggerModal } = useModalAutoTrigger();

  const onSubmit: SubmitHandler<LoginData> = (data) => {
    loginUser(data);
  };
  useEffect(() => {
    
    if (!isSuccess) return;
    autoTriggerModal({ action: "close", id: ModalId.Login });
  }, [autoTriggerModal, isSuccess]);
  const isModalLoading = useModalPreload(TimeDelay);

  if (isModalLoading) {
    return (
      <ScaleLoader className=" text-4xl text-center mx-auto text-gray-600" />
    );
  }

  return (
    <div className=" text-white flex flex-col items-center justify-center bg-gray-400  rounded-lg  mx-auto p-10 space-y-10 w-3/4">
      <h1 className=" self-center font-bold text-3xl uppercase transition-all duration-300 ease-in-out hover:text-transparent hover:bg-gradient-to-r from-gray-700 to-gray-900 cursor-default hover:bg-clip-text">
        Sign in
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-4/5 mx-auto flex flex-col items-start justify-start space-y-6 text-gray-400"
      >
        <div className=" flex flex-col items-start justify-start space-y-2 w-full">
          <label
            className=" text-gray-600 capitalize font-medium "
            htmlFor="username"
          >
            Username
          </label>
          <input
            className=" w-full p-2 rounded-lg"
            type="text"
            {...register("username", {
              required: "Username is required",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "User name must be letters only"
              }
            })}
            // onFocus={() => {
            //   // Clear the confirmPassword error when the input becomes active
            //   clearErrors("username");
            // }}
          />
          {errors.username && (
            <p className=" text-red-400 text-sm font-light">
              {errors.username.message}
            </p>
          )}
        </div>
        {/* <div className=" flex flex-col items-start justify-start space-y-2 w-full">
          <label
            className=" text-gray-600 capitalize font-medium "
            htmlFor="email"
          >
            Email
          </label>
          <input
            className=" w-full p-2 rounded-lg"
            type="text"
            {...register("email", {
              required: "Email is required",
              pattern: /^\S+@\S+\.\S+$/i // Example email pattern, replace with your own
            })}
            onFocus={() => {
              // Clear the confirmPassword error when the input becomes active
              clearErrors("email");
            }}
          />
          {errors.email && <p className=" text-red-400 text-sm font-light">{errors.email.message}</p>}
        </div> */}
        <div className=" flex flex-col items-start justify-start space-y-2 w-full">
          <label
            className=" text-gray-600 capitalize font-medium "
            htmlFor="password"
          >
            Password
          </label>
          <input
            className=" w-full p-2 rounded-lg"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters"
              }
            })}
            // onFocus={() => {
            //   // Clear the confirmPassword error when the input becomes active
            //   clearErrors("password");
            // }}
          />
          {errors.password && (
            <p className=" text-red-400 text-sm font-light">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="self-center">
          <p className=" w-full  text-center text-red-500 text-sm font-bold">
            {`${loginError || ""}`}
          </p>
        </div>
        <ButtonPrimary
          disabled={isLoggingIn}
          type="submit"
          extendedClassNames=" self-center text-white flex item-center justify-center space-x-2 px-4 py-2 uppercase font-semibold  border border-white hover:bg-white hover:text-gray-600 rounded-lg"
        >
          {isLoggingIn && (
            <ScaleLoader
              color="#fff"
              height={16}
              speedMultiplier={1}
              margin={2}
              width={3}
            />
          )}
          <span>login</span>
        </ButtonPrimary>
        <div className=" text-gray-600 flex items-center justify-start space-x-2 self-center">
          <span>Not registered yet ? </span>

          <Modal.Open id={ModalId.Register}>
            <span className=" uppercase text-white transition-colors duration-200 ease-in-out hover:bg-white hover:text-gray-600 rounded-lg p-2 text-sm">
              register
            </span>
          </Modal.Open>
        </div>
      </form>
    </div>
  );
}
