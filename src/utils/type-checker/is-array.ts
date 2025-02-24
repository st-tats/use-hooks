/**
 * 引数が配列かどうかを判定する関数
 *
 * @param arr - 判定対象の値。任意の型を指定可能。
 * @returns 引数が配列であれば `true`、それ以外の場合は `false` を返す。
 *
 * @example
 * ```typescript
 * isArray([1, 2, 3]); // true
 * isArray({});        // false
 * isArray("hello");   // false
 * isArray(null);      // false
 * ```
 */
export function isArray<T>(arr: T): boolean {
  return Array.isArray(arr);
}
