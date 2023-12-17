// import { deleteCookie, getCookie, hasCookie, setCookie } from "cookies-next";

// const saveCookieDetails = (cookieName, cookieDetails, maxAge = 60 * 60 * 2) => {
//   // ("saving cookies", cookieName, cookieDetails);
//   setCookie(cookieName, JSON.stringify(cookieDetails), {
//     path: "/",
//     maxAge: maxAge // expires in 7 days
//   });
// };

// const getCookieDetails = (cookieName) => {
//   // const storedCookieDetails = parseCookies(null)[cookieName];
//   const isCookie = hasCookie(cookieName);
//   if (!isCookie) return {};
//   const storedCookieDetails = getCookie(cookieName);
//   return JSON.parse(storedCookieDetails);
//   // return storedCookieDetails ? JSON.parse(storedCookieDetails) : null;
// };

// const removeCookieDetails = (cookieName) => {
//   // ("destroying cookie : ", cookieName);
//   const isCookie = hasCookie(cookieName);
//   if (!isCookie) return;
//   deleteCookie(cookieName);
// };

// export { saveCookieDetails, getCookieDetails, removeCookieDetails };
// //
import Cookies from "js-cookie";

// interface AccessKeyDetails {
//   accessKey: string;
// }

const saveAccessKey = (
  key: string,
  cookieName: string = "accessKey",
  maxAge: number = 60 * 60 * 2
) => {
  Cookies.set(cookieName, key, { path: "/", expires: maxAge / (24 * 60 * 60) });
};

const getAccessKey = (cookieName: string = "accessKey"): string | null => {
  const storedAccessKey = Cookies.get(cookieName);
  return storedAccessKey || null;
};

const removeAccessKey = (cookieName: string = "accessKey") => {
  Cookies.remove(cookieName);
};

export { saveAccessKey, getAccessKey, removeAccessKey };
