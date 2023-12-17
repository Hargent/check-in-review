import { LoginData, RegisterData } from "../types";

import { GetHeaders } from "./axios";
import axios from "axios";

async function authLoginUser(loginData: LoginData) {
  try {
    const response = await axios.post(
      "https://check-in-review.onrender.com/api/login/",
      loginData,
      {
        headers: GetHeaders()
      }
    );
    return response;
  } catch (err: unknown) {
    err;
    const errr = err as {
      [key: string]: { [key: string]: { [key: string]: [] } };
    };
    const error = errr?.response?.data?.non_field_errors?.at(0);
    throw new Error(error);
  }
}
async function authRegisterUser(registerData: RegisterData) {
  // (registerData);
  try {
    const response = await axios.post(
      "https://check-in-review.onrender.com/api/registeration/",
      registerData,
      {
        headers: GetHeaders()
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
        headers: GetHeaders()
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
