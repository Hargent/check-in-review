import { getAccessKey } from "../../utils/cookies";

function GetHeaders() {
  const accessKey = getAccessKey();
  const authorization = accessKey ? `Token ${accessKey}` : "";
  console.log(authorization, " : is the auth");

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",

    Authorization: authorization
  };

  return headers;
}
export { GetHeaders };
