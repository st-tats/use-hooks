/**
 * 引数が数字かどうかを判定する関数
 *
 * @param num - 判定対象の値。任意の型を指定可能。
 * @returns 引数が数字であれば `true`、それ以外の場合は `false` を返す。
 *
 * @example
 * ```typescript
 * isNumber(123);      // true
 * isNumber("123");    // false（文字列は数字ではない）
 * isNumber(NaN);      // false
 * isNumber(null);     // false
 * ```
 */
export function isNumber<T>(num: T): boolean {
  return typeof num === "number" && !isNaN(num);
}
