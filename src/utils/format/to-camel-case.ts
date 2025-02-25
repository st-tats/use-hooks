/**
 * 文字列をキャメルケースに変換する関数
 *
 * スネークケースやケバブケースの文字列をキャメルケースに変換します。
 * 例: "hello_world" → "helloWorld", "hello-world" → "helloWorld"
 *
 * @param str - 変換対象の文字列。null または undefined の場合は空文字列を返す。
 * @returns キャメルケースに変換された文字列。入力が無効な場合は空文字列。
 *
 * @example
 * ```typescript
 * const camelCase1 = toCamelCase("hello_world");
 * console.log(camelCase1); // "helloWorld"
 *
 * const camelCase2 = toCamelCase("hello-world");
 * console.log(camelCase2); // "helloWorld"
 *
 * const camelCase3 = toCamelCase(null);
 * console.log(camelCase3); // ""
 * ```
 */
export function toCamelCase(str: string | null | undefined): string {
  // 入力が null または undefined の場合は空文字列を返す
  if (str == null) {
    return "";
  }

  return str
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : "")) // 区切り文字の次の文字を大文字に変換
    .replace(/^(.)/, (c) => c.toLowerCase()); // 先頭の文字を小文字に変換
}
