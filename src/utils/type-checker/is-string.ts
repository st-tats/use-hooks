/**
 * 引数が文字列かどうかを判定する関数
 *
 * @param str - 判定対象の値。任意の型を指定可能。
 * @returns 引数が文字列であれば `true`、それ以外の場合は `false` を返す。
 *
 * @example
 * ```typescript
 * isString("hello"); // true
 * isString(123);     // false
 * isString(null);    // false
 * isString("");      // true（空文字列も文字列と判定）
 * ```
 */
export function isString<T>(str: T): boolean {
  // 引数が存在し、かつその型が "string" であるかをチェック
  return str && typeof str === "string";
}
