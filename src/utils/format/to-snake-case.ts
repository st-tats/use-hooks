/**
 * 文字列をスネークケースに変換する関数
 *
 * キャメルケースやパスカルケースの文字列をスネークケースに変換します。
 * 例: "helloWorld" → "hello_world", "HelloWorld" → "hello_world"
 *
 * @param str - 変換対象の文字列。null または undefined の場合は空文字列を返す。
 * @returns スネークケースに変換された文字列。入力が無効な場合は空文字列。
 *
 * @example
 * ```typescript
 * const snakeCase1 = toSnakeCase("helloWorld");
 * console.log(snakeCase1); // "hello_world"
 *
 * const snakeCase2 = toSnakeCase("HelloWorld");
 * console.log(snakeCase2); // "hello_world"
 *
 * const snakeCase3 = toSnakeCase(null);
 * console.log(snakeCase3); // ""
 * ```
 */
export function toSnakeCase(str: string | null | undefined): string {
  // 入力が null または undefined の場合は空文字列を返す
  if (str == null) {
    return "";
  }

  // キャメルケースやパスカルケースをスネークケースに変換
  return str
    .replace(/([A-Z])/g, "_$1") // 大文字の前にアンダースコアを挿入
    .toLowerCase() // すべて小文字に変換
    .replace(/^_/, ""); // 先頭のアンダースコアを削除（パスカルケースの場合）
}
