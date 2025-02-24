import { filterNumbers } from "./filter-numbers";
import { sumNumbers } from "./sum-numbers";

/**
 * 配列内の数字の平均値を計算する
 * @param arr - 計算対象の配列
 * @returns 数字の平均値
 *
 * @example
 * ```typescript
 * averageNumbers(["5", 1, "3", 3]); // 2
 * ```
 */
export function averageNumbers(arr: (string | number)[]): number {
  const numbers = filterNumbers(arr);
  if (numbers.length === 0) return 0; // 配列が空の場合は0を返す
  return sumNumbers(numbers) / numbers.length;
}
