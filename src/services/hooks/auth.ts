import { LoginData, RegisterData } from "../types";
import { QueryClient, useMutation } from "@tanstack/react-query";
import {
  authLoginUser,
  authLogoutUser,
  authRegisterUser
} from "../actions/auth";
import {
  loginUser as loginUserReducer,
  logoutUser as logoutUserReducer
} from "../../redux/slice/auth-slice";
import { removeAccessKey, saveAccessKey } from "../../utils/cookies";

import { deleteUser } from "../../redux/slice/user-slice";
import { useAppDispatch } from "../../shared/hooks";
import { useAppToast } from "../../shared/hooks/use-toast/use-toast";
import { useNavigate } from "react-router-dom";

// import { useState } from "react";
const queryClient = new QueryClient();
function useUserLogin() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const mutation = useMutation({
    mutationKey: ["user-login"],
    mutationFn: authLoginUser,
    onSuccess(data) {
      //
      queryClient.invalidateQueries();
      saveAccessKey(data.data.key);
      dispatch(loginUserReducer());
      navigate("/dashboard");
      // ("This is the login data : ", data.data);
    }
  });

  const loginUser = async (loginData: LoginData) => {
    try {
      await mutation.mutateAsync(loginData);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return {
    user: mutation.data,
    isLoggingIn: mutation.isPending,
    loginError: mutation.error,
    isSuccess: mutation.isSuccess,
    loginUser
  };
}
function useUserRegister() {
  const { loginUser, user, isLoggingIn } = useUserLogin();
  const mutation = useMutation({
    mutationKey: ["user-register"],
    mutationFn: authRegisterUser,
    onSuccess: (userData) => {
      if (userData.status === 204) {
        const data = JSON.parse(userData.config.data);
        const loginData = {
          username: data.username,
          password: data.password1
        };
        loginUser(loginData);
      }
      // redirect("/dashboard");

      user;
      // queryClient.invalidateQueries();
      // (
      //   "This is the userd data : ",
      //   JSON.parse(userData.config.data)
      // );
    }
  });

  const registerUser = async (registerData: RegisterData) => {
    try {
      await mutation.mutateAsync(registerData);
    } catch (error) {
      console.error("Error registering :", error);
    }
  };

  return {
    user: mutation.data,
    isRegistering: isLoggingIn || mutation.isPending,
    isSuccess: mutation.isSuccess,
    registerError: mutation.error,

    registerUser
  };
}
function useUserLogout() {
  const dispatch = useAppDispatch();
  const toaster = useAppToast();
  const navigate = useNavigate();
  // const [isSuccess, setIsSuccess] = useState(false);
  const mutation = useMutation({
    mutationKey: ["user-logout"],
    mutationFn: authLogoutUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries();
      // setIsSuccess(true);
      toaster(data.data.detail, "success");
      removeAccessKey();
      dispatch(logoutUserReducer());
      dispatch(deleteUser());
      navigate("/home");
    }
  });

  const logoutUser = async () => {
    try {
      await mutation.mutateAsync();
    } catch (error) {
      console.error("Error logging out :", error);
    }
  };

  return {
    user: mutation.data,
    isLoggingOut: mutation.isPending,
    isSuccess: mutation.isSuccess,
    logoutError: mutation.error,

    logoutUser
  };
}

export { useUserLogin, useUserLogout, useUserRegister };
