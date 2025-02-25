/**
 * 秒数を「HH:MM:SS」形式にフォーマットする関数
 *
 * @param seconds - フォーマット対象の秒数。null または undefined の場合は空文字を返す。
 * @returns 「HH:MM:SS」形式の文字列。無効な入力の場合は "00:00:00"。
 *
 * @example
 * ```typescript
 * const formattedTime1 = formatTime(3661);
 * console.log(formattedTime1); // "01:01:01"
 *
 * const formattedTime2 = formatTime(null);
 * console.log(formattedTime2); // "00:00:00"
 *
 * const formattedTime3 = formatTime(undefined);
 * console.log(formattedTime3); // "00:00:00"
 * ```
 */
export function formatTime(seconds: number | null | undefined): string | null {
  // 入力が null または undefined の場合は空文字を返す
  if (seconds == null) {
    return null;
  }

  // 秒数を時間、分、秒に分割
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  // 2桁でフォーマットして結合
  return [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
    secs.toString().padStart(2, "0"),
  ].join(":");
}
