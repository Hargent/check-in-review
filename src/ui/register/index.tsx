import { SubmitHandler, useForm } from "react-hook-form";

import ButtonPrimary from "../../components/button-primary/button-primary";
import Modal from "../../components/modal/modal";
import { ModalId } from "../../shared/enums";
import { RegisterData } from "../../services/types";
import { ScaleLoader } from "react-spinners";
import { TimeDelay } from "../../shared/constants";
import { useEffect } from "react";
import { useModalAutoTrigger } from "../../components/modal/use-modal";
import { useModalPreload } from "../../shared/hooks/use-modal-preload/use-modal-preload";
import { useUserRegister } from "../../services/hooks/auth";

export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    // clearErrors,
    getValues,
    formState: { errors }
  } = useForm<RegisterData>();
  const { autoTriggerModal } = useModalAutoTrigger();
  const { isSuccess, isRegistering, registerUser, registerError } =
    useUserRegister();

  const onSubmit: SubmitHandler<RegisterData> = (data) => {
    registerUser(data);
  };
  useEffect(() => {
    if (!isSuccess) return;
    autoTriggerModal({ action: "close", id: ModalId.Register });
  }, [autoTriggerModal, isSuccess]);

  const validatepassword2 = (value: string) => {
    const password = getValues("password1");
    if (value !== password) {
      setError("password2", {
        type: "manual",
        message: "Passwords do not match"
      });
      return false;
    }
    return true;
  };

  const isModalLoading = useModalPreload(TimeDelay);

  // const isLoading = false;
  if (isModalLoading) {
    return (
      <ScaleLoader className=" text-4xl text-center mx-auto text-gray-600" />
    );
  }
  return (
    <div className=" text-white flex flex-col items-center justify-center bg-gray-400  rounded-lg  mx-auto p-10 space-y-10 w-3/4">
      <h1 className=" self-center font-bold text-3xl uppercase transition-all duration-300 ease-in-out hover:text-transparent hover:bg-gradient-to-r from-gray-700 to-gray-900 cursor-default hover:bg-clip-text">
        Sign up
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full px-2 sm:px-0 sm:w-4/5 mx-auto flex flex-col items-start justify-start space-y-6 text-gray-400"
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
              pattern: /^[A-Za-z]+$/i
            })}
          />
          {errors.username && (
            <p className=" text-red-400 text-sm font-light">
              {errors.username.message}
            </p>
          )}
        </div>
        <div className=" flex flex-col items-start justify-start space-y-2 w-full">
          <label
            className=" text-gray-600 capitalize font-medium "
            htmlFor="email"
          >
            Email
          </label>
          <input
            className=" w-full p-2 rounded-lg"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: /^\S+@\S+\.\S+$/
            })}
          />
          {errors.email && (
            <p className=" text-red-400 text-sm font-light">
              {errors.email.message}
            </p>
          )}
        </div>
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
            {...register("password1", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters"
              }
            })}
          />
          {errors.password1 && (
            <div>
              <p className=" text-red-400 text-sm font-light">
                {errors.password1.message}
              </p>
            </div>
          )}
        </div>
        <div className=" flex flex-col items-start justify-start space-y-2 w-full">
          <label
            className=" text-gray-600 capitalize font-medium "
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className=" w-full p-2 rounded-lg"
            type="password"
            {...register("password2", {
              required: "Confirm Password is required",
              validate: (value) => validatepassword2(value)
            })}
          />
          {errors.password2 && (
            <div>
              <p className=" text-red-400 text-sm font-light">
                {errors.password2.message}
              </p>
            </div>
          )}
        </div>
        {registerError && (
          <div className="self-center">
            <p className=" w-full  text-center text-red-500 text-sm font-bold">
              {`${registerError || ""}`}
            </p>
          </div>
        )}
        <ButtonPrimary
          disabled={isRegistering}
          type="submit"
          extendedClassNames=" self-center text-white flex item-center justify-center space-x-2 px-4 py-2 uppercase font-semibold  border border-white hover:bg-white hover:text-gray-600 rounded-lg"
        >
          {isRegistering && (
            <ScaleLoader
              color="#fff"
              height={16}
              speedMultiplier={1}
              margin={2}
              width={3}
            />
          )}
          <span>register</span>
        </ButtonPrimary>
        <div className=" text-gray-600 flex items-center justify-start space-x-2 self-center">
          <span>Not registered yet ? </span>

          <Modal.Open id={ModalId.Login}>
            <span className=" uppercase text-white transition-colors duration-200 ease-in-out hover:bg-white hover:text-gray-600 rounded-lg p-2 text-sm">
              login
            </span>
          </Modal.Open>
        </div>
      </form>
    </div>
  );
}
