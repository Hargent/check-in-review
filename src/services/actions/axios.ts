import { getAccessKey } from "../../utils/cookies";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-CSRFTOKEN": `${getAccessKey() || ""}`,
  Authorization: `Bearer ${getAccessKey() || ""}`
};
export { headers };
