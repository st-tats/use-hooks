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
export function filterNumbers(arr: (string | number)[]): number[] {
  return arr.filter((item): item is number => typeof item === "number");
}
