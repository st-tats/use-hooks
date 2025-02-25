import { filterNumbers } from "./filter-numbers";
import { sumNumbers } from "./sum-numbers";

/**
 * 配列内の数字の平均値を計算する
 * @param arr - 計算対象の配列。`null` または `undefined` の場合は `null` を返す。
 * @returns 数字の平均値。無効な入力の場合は `null`。
 *
 * @example
 * ```typescript
 * averageNumbers(["5", 1, "3", 3]); // 2
 *
 * averageNumbers(null); // null
 * ```
 */
export function averageNumbers(
  arr: (string | number)[] | null | undefined
): number | null {
  if (arr == null) {
    return null; // null または undefined の場合
  }

  const numbers = filterNumbers(arr);
  if (numbers === null) {
    return null;
  }
  if (numbers.length === 0) return 0; // 配列が空の場合は0を返す
  const sum = sumNumbers(numbers);
  return sum === null ? null : sum / numbers.length;
}
