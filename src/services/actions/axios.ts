import { getAccessKey } from "../../utils/cookies";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-CSRFTOKEN":
    "KbRH0Y3yqWBefOvajSIpq4WYYxwilSq2Jstt0nR8da19vsJC41nzLaU1HnI4FUe9",
  Authorization: `Token ${getAccessKey() || ""}`
};
export { headers };
