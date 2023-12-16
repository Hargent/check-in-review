import { getAccessKey } from "../../utils/cookies";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",

  Authorization: `Token ${getAccessKey() || ""}`
};
export { headers };
