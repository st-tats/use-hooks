/**
 * 引数がオブジェクトかどうかを判定する関数
 *
 * @param obj - 判定対象の値。任意の型を指定可能。
 * @returns 引数がオブジェクトであれば `true`、それ以外の場合は `false` を返す。
 *
 * @example
 * ```typescript
 * isObject({});        // true
 * isObject([]);        // false（配列はオブジェクトではない）
 * isObject(null);      // false
 * isObject("hello");   // false
 * ```
 */
export function isObject<T>(obj: T): boolean {
  return obj && typeof obj === "object" && !Array.isArray(obj);
}
