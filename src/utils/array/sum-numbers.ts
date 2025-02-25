import { filterNumbers } from "./filter-numbers";

/**
 * 配列内の数字の合計を計算する
 * @param arr - 計算対象の配列。`null` または `undefined` の場合は `null` を返す。
 * @returns 数字の合計。無効な入力の場合は `null`。
 *
 * @example
 * ```typescript
 * sumNumbers([1, 2, 3]); // 6
 *
 * sumNumbers(null); // null
 * ```
 */
export function sumNumbers(arr: number[] | null | undefined): number | null {
  if (arr == null) {
    return null; // null または undefined の場合
  }
  return arr.reduce((sum, num) => sum + num, 0);
}
