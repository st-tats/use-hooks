import { filterNumbers } from "./filter-numbers";

/**
 * 配列内の数字だけをフィルタリングする
 * @param arr - フィルタリング対象の配列
 * @returns 数字だけを含む配列
 *
 * @example
 * ```typescript
 * filterNumbers(["5", 1, "3", 3]); // [1, 3]
 * ```
 */
export function sumNumbers(arr: (string | number)[]): number {
  const numbers = filterNumbers(arr);
  return numbers.reduce((sum, num) => sum + num, 0);
}
