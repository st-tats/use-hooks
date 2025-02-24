import { filterNumbers } from "./filter-numbers";

/**
 * 配列内の数字の合計を計算する
 * @param arr - 計算対象の配列
 * @returns 数字の合計値
 *
 * @example
 * ```typescript
 * sumNumbers(["5", 1, "3", 3]); // 4
 * ```
 */
export function sumNumbers(arr: (string | number)[]): number {
  const numbers = filterNumbers(arr);
  return numbers.reduce((sum, num) => sum + num, 0);
}
