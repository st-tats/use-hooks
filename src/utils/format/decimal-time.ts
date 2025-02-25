/**
 * 小数形式の時刻を指定されたフォーマットに変換する関数（12時間形式対応）
 *
 * @param time - 小数形式の時刻（例: 10.5, "10.5", 12.75, "12.75"）。`null` または `undefined` の場合は `null` を返す。
 * @param format - フォーマット文字列（例: "HH:mm", "hh:mm A"）。デフォルトは "HH:mm"。
 * @returns フォーマットされた時刻文字列。無効な入力の場合は `null`。
 *
 * @example
 * ```typescript
 * const formattedTime1 = formatDecimalTime(13.5, "hh:mm A");
 * console.log(formattedTime1); // "01:30 PM"
 *
 * const formattedTime2 = formatDecimalTime("10.5", "HH:mm");
 * console.log(formattedTime2); // "10:30"
 *
 * const formattedTime3 = formatDecimalTime("invalid", "HH:mm");
 * console.log(formattedTime3); // null
 *
 * const formattedTime4 = formatDecimalTime(null, "HH:mm");
 * console.log(formformattedTime4); // null
 * ```
 */
export function formatDecimalTime(
  time: number | string | null | undefined,
  format: string = "HH:mm"
): string | null {
  if (time == null) {
    return null; // null または undefined の場合
  }

  // 文字列が渡された場合は数値に変換
  const numericTime = typeof time === "string" ? parseFloat(time) : time;

  // 無効な数値の場合は null を返す
  if (isNaN(numericTime)) {
    return null;
  }

  // 整数部分（時間）と小数部分（分）を分離
  const hours = Math.floor(numericTime);
  const minutes = Math.round((numericTime - hours) * 60);

  // 12時間形式用の変数
  const isPM = hours >= 12;
  const twelveHourFormat = hours % 12 || 12; // 0時は12時として表示

  // フォーマット文字列を置換
  return format
    .replace(/HH/g, String(hours).padStart(2, "0")) // 24時間形式
    .replace(/hh/g, String(twelveHourFormat).padStart(2, "0")) // 12時間形式
    .replace(/mm/g, String(minutes).padStart(2, "0")) // 分
    .replace(/A/g, isPM ? "PM" : "AM"); // AM/PM
}
