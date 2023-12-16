import axios from "axios";
import { headers } from "./axios";

async function fetchUser() {
  console.log(headers);
  try {
    const response = await axios.get(
      "https://check-in-review.onrender.com/api/user/",
      {
        headers
      }
    );
    console.log(response);
    return response;
  } catch (err) {
    const errr = err as {
      [key: string]: { [key: string]: { [key: string]: [] } };
    };
    const error = errr?.response?.data?.non_field_errors?.at(0);
    throw new Error(error);
  }
}

export { fetchUser };
