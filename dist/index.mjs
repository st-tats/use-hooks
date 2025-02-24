// src/hooks/use-cookie.ts
import { useState, useEffect } from "react";
function useCookie(key, initialValue, options) {
  const {
    serialize = JSON.stringify,
    parse = JSON.parse,
    expiresDays = 365
  } = options || {};
  const getCookie = (key2) => {
    if (typeof document === "undefined")
      return null;
    const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
    const targetCookie = cookies.find((cookie) => cookie.startsWith(`${key2}=`));
    return targetCookie ? decodeURIComponent(targetCookie.split("=")[1]) : null;
  };
  const setCookie = (key2, value) => {
    if (typeof document === "undefined")
      return;
    const date = /* @__PURE__ */ new Date();
    date.setTime(date.getTime() + expiresDays * 24 * 60 * 60 * 1e3);
    document.cookie = `${key2}=${encodeURIComponent(
      value
    )};expires=${date.toUTCString()};path=/`;
  };
  const deleteCookie = (key2) => {
    if (typeof document === "undefined")
      return;
    document.cookie = `${key2}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
  };
  const cookieValue = getCookie(key);
  const initialParsedValue = cookieValue ? parse(cookieValue) : typeof initialValue === "function" ? initialValue() : initialValue;
  const [state, setState] = useState(initialParsedValue);
  useEffect(() => {
    if (state === null) {
      deleteCookie(key);
    } else {
      setCookie(key, serialize(state));
    }
  }, [key, state, serialize]);
  const setCookieState = (value) => {
    if (value === null) {
      deleteCookie(key);
      setState(initialParsedValue);
    } else {
      setState(value);
    }
  };
  return [state, setCookieState];
}
export {
  useCookie
};
