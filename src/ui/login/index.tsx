import { SubmitHandler, useForm } from "react-hook-form";

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

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <div className="">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
