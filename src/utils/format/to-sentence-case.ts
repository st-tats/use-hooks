/**
 * 文字列をセンテンスケース（文の先頭を大文字、残りを小文字）に変換する関数
 *
 * アンダースコアやキャメルケースの文字列をセンテンスケースに変換します。
 * 例: "hello_world" → "Hello world", "thisIsCamelCase" → "This is camel case"
 *
 * @param str - 変換対象の文字列。null または undefined の場合は空文字列を返す。
 * @returns センテンスケースに変換された文字列。入力が無効な場合は空文字列。
 *
 * @example
 * ```typescript
 * const sentence1 = toSentenceCase("hello_world");
 * console.log(sentence1); // "Hello world"
 *
 * const sentence2 = toSentenceCase("thisIsCamelCase");
 * console.log(sentence2); // "This is camel case"
 *
 * const sentence3 = toSentenceCase(null);
 * console.log(sentence3); // ""
 * ```
 */
export function toSentenceCase(str: string | null | undefined): string {
  // 入力が null または undefined の場合は空文字列を返す
  if (str == null) {
    return "";
  }

  return str
    .replace(/_/g, " ") // アンダースコアをスペースに置換
    .replace(/([A-Z])/g, " $1") // キャメルケースの単語を分割
    .toLowerCase() // すべて小文字に変換
    .replace(/^\w/, (c) => c.toUpperCase()) // 先頭の文字を大文字に変換
    .replace(/\s+/g, " ") // 連続するスペースを単一のスペースに置換
    .trim(); // 前後のスペースを削除
}
