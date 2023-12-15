import axios from "axios";
import { LoginData, RegisterData } from "../types";
import { getAccessKey } from "../../utils/cookies";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-CSRFTOKEN": `${getAccessKey() || ""}`
};

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

    // if (response.status === 204) {
    //   const loginData: LoginData = {
    //     username: registerData.username,
    //     password: registerData.password1
    //   };
    //   const authLoginUser(loginData);
    // }
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
