import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    getValues,
    formState: { errors }
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const onFailure: SubmitErrorHandler<IFormInput> = (data) => console.log(data);

  const validateConfirmPassword = (value: string) => {
    const password = getValues("password");
    if (value !== password) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match"
      });
      return false;
    }
    return true;
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onFailure)}>
        <div className="">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            {...register("username", {
              required: "Username is required",
              pattern: /^[A-Za-z]+$/i
            })}
            onFocus={() => {
              // Clear the confirmPassword error when the input becomes active
              clearErrors("username");
            }}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div className="">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: /^\S+@\S+\.\S+$/
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
          {errors.password && (
            <div>
              <p>{errors.password.message}</p>
            </div>
          )}
        </div>
        <div className="">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) => validateConfirmPassword(value)
            })}
            onFocus={() => {
              // Clear the confirmPassword error when the input becomes active
              clearErrors("confirmPassword");
            }}
          />
          {errors.confirmPassword && (
            <div>
              <p>{errors.confirmPassword.message}</p>
            </div>
          )}
        </div>
        <div className="">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
