/**
 * 配列内の数字だけをフィルタリングする
 * @param arr - フィルタリング対象の配列。`null` または `undefined` の場合は `null` を返す。
 * @returns 数字だけを含む配列。無効な入力の場合は `null`。
 *
 * @example
 * ```typescript
 * filterNumbers(["5", 1, "3", 3]); // [1, 3]
 *
 * filterNumbers(null); // null
 * ```
 */
export function filterNumbers(
  arr: (string | number)[] | null | undefined
): number[] | null {
  if (arr == null) {
    return null; // null または undefined の場合
  }
  return arr.filter((item): item is number => typeof item === "number");
}
