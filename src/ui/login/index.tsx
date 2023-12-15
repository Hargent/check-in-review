import { SubmitHandler, useForm } from "react-hook-form";
import { useModalPreload } from "../../shared/hooks/use-modal-preload/use-modal-preload";
import { ScaleLoader } from "react-spinners";
import { TimeDelay } from "../../shared/constants";
import ButtonPrimary from "../../components/button-primary/button-primary";
import { useAppDispatch } from "../../shared/hooks";
import { loginUser } from "../../redux/slice/auth-slice";

interface IFormInput {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors }
  } = useForm<IFormInput>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // Handle form submission logic here
    console.log(data);
    dispatch(loginUser());
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
      <h1 className=" self-center font-bold text-3xl uppercase transition-all duration-300 ease-in-out hover:text-transparent hover:bg-gradient-to-r from-green-700 to-green-900 cursor-default hover:bg-clip-text">
        Sign in
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col items-start justify-start space-y-6"
      >
        <div className="">
          <label htmlFor="email">Email</label>
          <input
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
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters"
              }
            })}
            onFocus={() => {
              // Clear the confirmPassword error when the input becomes active
              clearErrors("password");
            }}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <ButtonPrimary
          type="submit"
          extendedClassNames=" self-center text-white flex item-center justify-center space-x-2 px-4 py-2 capitalize font-semibold  border border-white hover:bg-white hover:text-green-600 rounded-lg"
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
          <span>login</span>
        </ButtonPrimary>
      </form>
    </div>
  );
}
