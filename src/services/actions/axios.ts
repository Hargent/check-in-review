import { getAccessKey } from "../../utils/cookies";

function GetHeaders() {
  const accessKey = getAccessKey();
  const authorization = accessKey ? `Token ${accessKey}` : "";


  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",

    Authorization: authorization
  };

  return headers;
}
export { GetHeaders };
