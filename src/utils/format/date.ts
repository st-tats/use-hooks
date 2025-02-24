/**
 * カスタムフォーマットで日付をフォーマットする関数
 *
 * @param date - フォーマット対象の日付（Dateオブジェクト、文字列、またはタイムスタンプ）
 * @param format - フォーマット文字列（例: "YYYY年MM月dd日(ddd)"）。デフォルトは "YYYY年MM月dd日(ddd)"。
 * @param timeZone - タイムゾーン（例: "Asia/Tokyo"）。空の場合は "Asia/Tokyo" を使用。
 * @returns フォーマットされた日付文字列。無効な日付の場合は `null` を返す。
 *
 * @example
 * ```typescript
 * const formattedDate = formatDate(new Date(), "YYYY年MM月dd日(ddd)");
 * console.log(formattedDate); // "2023年10月05日(木)"
 *
 * const formattedDateTime = formatDate(new Date(), "YYYY年MM月dd日(ddd) HH:mm:ss", "UTC");
 * console.log(formattedDateTime); // "2023年10月05日(木) 14:30:45"
 * ```
 */
export function formatDate(
  date: Date | string | number,
  format: string = "YYYY年MM月dd日(ddd)",
  timeZone: string = "Asia/Tokyo"
): string | null {
  // 無効な日付の場合は null を返す
  if (!date) {
    return null;
  }

  // Dateオブジェクトに変換
  const targetDate = new Date(date);

  // 無効なDateオブジェクトの場合は null を返す
  if (isNaN(targetDate.getTime())) {
    return null;
  }

  // timeZone が空の場合は "Asia/Tokyo" を使用
  const effectiveTimeZone = timeZone || "Asia/Tokyo";

  // タイムゾーンを考慮した日付の各部分を取得
  const formatter = new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // 24時間表記
    timeZone: effectiveTimeZone, // 有効なタイムゾーンを使用
  });

  // フォーマットされた日付の各部分を取得
  const parts = formatter.formatToParts(targetDate);

  // フォーマット文字列に従って日付を組み立て
  const formatMap: Record<string, string> = {
    YYYY: parts.find((part) => part.type === "year")?.value || "",
    MM: parts.find((part) => part.type === "month")?.value || "",
    dd: parts.find((part) => part.type === "day")?.value || "",
    ddd: parts.find((part) => part.type === "weekday")?.value || "",
    HH: parts.find((part) => part.type === "hour")?.value || "",
    mm: parts.find((part) => part.type === "minute")?.value || "",
    ss: parts.find((part) => part.type === "second")?.value || "",
  };

  // フォーマット文字列を置換
  return format.replace(
    /YYYY|MM|dd|ddd|HH|mm|ss/g,
    (match) => formatMap[match] || match
  );
}
