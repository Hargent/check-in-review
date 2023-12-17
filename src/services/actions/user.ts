import { GetHeaders } from "./axios";
import axios from "axios";

async function fetchUser() {
  GetHeaders();
  try {
    const response = await axios.get(
      "https://check-in-review.onrender.com/api/user/",
      {
        headers: GetHeaders()
      }
    );
    response;
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
