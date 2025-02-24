import { useState, useEffect } from "react";

export interface UseLocalStorageOptions<T> {
  serialize?: (value: T) => string;
  parse?: (value: string) => T;
}

/**
 * ローカルストレージを使用するカスタムフック
 *
 * @param key - ローカルストレージのキー
 * @param initialValue - 初期値または初期値を返す関数
 * @param options - シリアライズとパースのオプション
 * @returns [状態値, 状態を更新する関数]
 *
 * @example
 * ```typescript
 * const [value, setValue] = useLocalStorage("myKey", "defaultValue");
 * ```
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T),
  options?: UseLocalStorageOptions<T>
): [T, (value: T | null) => void] {
  const { serialize = JSON.stringify, parse = JSON.parse } = options || {};

  // ローカルストレージから値を取得する関数
  const getLocalStorageValue = (key: string): T | null => {
    if (typeof window === "undefined") return null; // SSR環境での対応
    const item = window.localStorage.getItem(key);
    return item ? parse(item) : null;
  };

  // ローカルストレージに値を設定する関数
  const setLocalStorageValue = (key: string, value: string) => {
    if (typeof window === "undefined") return; // SSR環境での対応
    window.localStorage.setItem(key, value);
  };

  // ローカルストレージから値を削除する関数
  const deleteLocalStorageValue = (key: string) => {
    if (typeof window === "undefined") return; // SSR環境での対応
    window.localStorage.removeItem(key);
  };

  // 初期値の設定
  const localStorageValue = getLocalStorageValue(key);
  const initialParsedValue = localStorageValue
    ? localStorageValue
    : typeof initialValue === "function"
    ? (initialValue as () => T)()
    : initialValue;
  const [state, setState] = useState<T>(initialParsedValue);

  // ローカルストレージの変更を検知し、値を同期
  useEffect(() => {
    if (state === null) {
      deleteLocalStorageValue(key);
    } else {
      setLocalStorageValue(key, serialize(state));
    }
  }, [key, state, serialize]);

  // ローカルストレージの状態を更新する関数
  const setLocalStorageState = (value: T | null) => {
    if (value === null) {
      deleteLocalStorageValue(key);
      setState(initialParsedValue);
    } else {
      setState(value);
    }
  };

  return [state, setLocalStorageState];
}
