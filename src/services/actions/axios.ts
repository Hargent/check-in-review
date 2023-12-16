import { getAccessKey } from "../../utils/cookies";

function GetHeaders() {
  const accessKey = getAccessKey();
  console.log(accessKey, " : is the access key");
  const authorization = accessKey ? `Token ${accessKey}` : "";

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",

    Authorization: authorization
  };

  return headers;
}
export { GetHeaders };
