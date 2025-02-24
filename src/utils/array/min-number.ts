import { filterNumbers } from "./filter-numbers";

/**
 * 配列内の数字の最小値を取得する
 * @param arr - 計算対象の配列
 * @returns 数字の最小値（配列が空の場合は `null`）
 *
 * @example
 * ```typescript
 * minNumber(["5", 1, "3", 3]); // 1
 * ```
 */
export function minNumber(arr: (string | number)[]): number | null {
  const numbers = filterNumbers(arr);
  if (numbers.length === 0) return null; // 配列が空の場合はnullを返す
  return Math.min(...numbers);
}
