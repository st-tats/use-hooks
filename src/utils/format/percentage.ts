/**
 * 数値をパーセンテージにフォーマットする関数
 *
 * @param value - フォーマット対象の数値（0 から 1 の範囲）。null または undefined の場合は null を返す。
 * @param decimals - 小数点以下の桁数。デフォルトは 2。
 * @returns パーセンテージの文字列。無効な入力の場合は null。
 *
 * @example
 * ```typescript
 * const formattedPercentage1 = formatPercentage(0.1234);
 * console.log(formattedPercentage1); // "12.34%"
 *
 * const formattedPercentage2 = formatPercentage(null);
 * console.log(formattedPercentage2); // null
 *
 * const formattedPercentage3 = formatPercentage(undefined);
 * console.log(formattedPercentage3); // null
 * ```
 */
export function formatPercentage(
  value: number | null | undefined,
  decimals: number = 2
): string | null {
  // 入力が null または undefined の場合は null を返す
  if (value == null) {
    return null;
  }

  return `${(value * 100).toFixed(decimals)}%`;
}
