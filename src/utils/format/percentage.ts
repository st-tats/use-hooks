/**
 * 数値をパーセンテージにフォーマットする関数
 *
 * @param value - フォーマット対象の数値（0 から 1 の範囲）
 * @param decimals - 小数点以下の桁数。デフォルトは 2。
 * @returns パーセンテージの文字列
 *
 * @example
 * ```typescript
 * const formattedPercentage = formatPercentage(0.1234);
 * console.log(formattedPercentage); // "12.34%"
 * ```
 */
export function formatPercentage(value: number, decimals: number = 2): string {
  return `${(value * 100).toFixed(decimals)}%`;
}
