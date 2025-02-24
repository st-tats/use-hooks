import { useState, useEffect } from "react";

export interface UseCookieOptions<T> {
  serialize?: (value: T) => string;
  parse?: (value: string) => T;
  expiresDays?: number;
}

export function useCookie<T>(
  key: string,
  initialValue: T | (() => T),
  options?: UseCookieOptions<T>
): [T, (value: T | null) => void] {
  const {
    serialize = JSON.stringify,
    parse = JSON.parse,
    expiresDays = 365,
  } = options || {};

  // クッキーを取得する関数
  const getCookie = (key: string): string | null => {
    if (typeof document === "undefined") return null;
    const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
    const targetCookie = cookies.find((cookie) => cookie.startsWith(`${key}=`));
    return targetCookie ? decodeURIComponent(targetCookie.split("=")[1]) : null;
  };

  // クッキーを設定する関数
  const setCookie = (key: string, value: string) => {
    if (typeof document === "undefined") return;
    const date = new Date();
    date.setTime(date.getTime() + expiresDays * 24 * 60 * 60 * 1000);
    document.cookie = `${key}=${encodeURIComponent(
      value
    )};expires=${date.toUTCString()};path=/`;
  };

  // クッキーを削除する関数
  const deleteCookie = (key: string) => {
    if (typeof document === "undefined") return;
    document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
  };

  // 初期値の設定
  const cookieValue = getCookie(key);
  const initialParsedValue = cookieValue
    ? parse(cookieValue)
    : typeof initialValue === "function"
    ? (initialValue as () => T)()
    : initialValue;
  const [state, setState] = useState<T>(initialParsedValue);

  // クッキーの変更を検知し、値を同期
  useEffect(() => {
    if (state === null) {
      deleteCookie(key);
    } else {
      setCookie(key, serialize(state));
    }
  }, [key, state, serialize]);

  // クッキーの状態を更新する関数
  const setCookieState = (value: T | null) => {
    if (value === null) {
      deleteCookie(key);
      setState(initialParsedValue);
    } else {
      setState(value);
    }
  };

  return [state, setCookieState];
}
