import { LoginData, RegisterData } from "../types";

import axios from "axios";
import { headers } from "./axios";

async function authLoginUser(loginData: LoginData) {
  // console.log(loginData);
  try {
    const response = await axios.post(
      "https://check-in-review.onrender.com/api/login/",
      loginData,
      {
        headers
      }
    );
    return response;
  } catch (err: unknown) {
    console.log(err);
    const errr = err as {
      [key: string]: { [key: string]: { [key: string]: [] } };
    };
    const error = errr?.response?.data?.non_field_errors?.at(0);
    throw new Error(error);
  }
}
async function authRegisterUser(registerData: RegisterData) {
  console.log(registerData);
  try {
    const response = await axios.post(
      "https://check-in-review.onrender.com/api/registration/",
      registerData,
      {
        headers
      }
    );
    return response;
  } catch (err) {
    const errr = err as {
      [key: string]: { [key: string]: { [key: string]: [] } };
    };
    const error = errr?.response?.data?.non_field_errors?.at(0);
    throw new Error(error);
  }
}
async function authLogoutUser() {
  try {
    const response = await axios.post(
      "https://check-in-review.onrender.com/api/logout/",
      {
        headers
      }
    );

    return response;
    // const data = await response.json();
  } catch (err) {
    const errr = err as {
      [key: string]: { [key: string]: { [key: string]: [] } };
    };
    const error = errr?.response?.data?.non_field_errors?.at(0);
    throw new Error(error);
  }
}
export { authLoginUser, authRegisterUser, authLogoutUser };
