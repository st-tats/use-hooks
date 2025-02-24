/**
 * 秒数を「HH:MM:SS」形式にフォーマットする関数
 *
 * @param seconds - フォーマット対象の秒数
 * @returns 「HH:MM:SS」形式の文字列
 *
 * @example
 * ```typescript
 * const formattedTime = formatTime(3661);
 * console.log(formattedTime); // "01:01:01"
 * ```
 */
export function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
    secs.toString().padStart(2, "0"),
  ].join(":");
}
