/**
 * フォーマットされた時刻文字列を小数形式の時刻に変換する関数
 *
 * @param formattedTime - フォーマットされた時刻文字列（例: "01:30 PM", "10:30"）
 * @param format - フォーマット文字列（例: "HH:mm", "hh:mm A"）。デフォルトは "HH:mm"。
 * @returns 小数形式の時刻（例: 13.5, 10.5）。無効な入力の場合は `null`。
 *
 * @example
 * ```typescript
 * const decimalTime1 = parseFormattedTime("01:30 PM", "hh:mm A");
 * console.log(decimalTime1); // 13.5
 *
 * const decimalTime2 = parseFormattedTime("10:30", "HH:mm");
 * console.log(decimalTime2); // 10.5
 *
 * const decimalTime3 = parseFormattedTime("invalid", "HH:mm");
 * console.log(decimalTime3); // null
 * ```
 */
export function parseFormattedTime(
  formattedTime: string,
  format: string = "HH:mm"
): number | null {
  const timeRegex = /(\d{1,2}):(\d{2})\s?(AM|PM)?/i;
  const match = formattedTime.match(timeRegex);

  if (!match) {
    return null; // 無効なフォーマット
  }

  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const period = match[3]?.toUpperCase(); // "AM" または "PM"

  if (isNaN(hours) || isNaN(minutes) || minutes < 0 || minutes >= 60) {
    return null; // 無効な時間
  }

  // 12時間形式の処理
  if (format.includes("hh") && period) {
    if (period === "PM" && hours !== 12) {
      hours += 12; // 午後の時は+12
    } else if (period === "AM" && hours === 12) {
      hours = 0; // 午前12時は0時に変換
    }
  }

  // 小数形式に変換
  return hours + minutes / 60;
}
