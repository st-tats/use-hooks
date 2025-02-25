import { filterNumbers } from "./filter-numbers";

/**
 * 配列内の数字の最大値を取得する
 * @param arr - 計算対象の配列。`null` または `undefined` の場合は `null` を返す。
 * @returns 数字の最大値（配列が空の場合は `null`）。無効な入力の場合は `null`。
 *
 * @example
 * ```typescript
 * maxNumber(["5", 1, "3", 3]); // 3
 *
 * maxNumber(null); // null
 * ```
 */
export function maxNumber(
  arr: (string | number)[] | null | undefined
): number | null {
  if (arr == null) {
    return null; // null または undefined の場合
  }

  const numbers = filterNumbers(arr) ?? [];
  if (numbers.length === 0) return null; // 配列が空の場合はnullを返す
  return Math.max(...numbers);
}
