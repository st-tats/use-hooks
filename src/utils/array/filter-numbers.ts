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
export function filterNumbers(arr: (string | number)[]): number[] {
  return arr.filter((item): item is number => typeof item === "number");
}
