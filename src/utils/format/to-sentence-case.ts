/**
 * 文字列をセンテンスケース（文の先頭を大文字、残りを小文字）に変換する関数
 *
 * @param str - 変換対象の文字列
 * @returns センテンスケースに変換された文字列
 *
 * @example
 * ```typescript
 * const sentence = toSentenceCase("hello_world");
 * console.log(sentence); // "Hello world"
 *
 * const sentence2 = toSentenceCase("thisIsCamelCase");
 * console.log(sentence2); // "This is camel case"
 * ```
 */
export function toSentenceCase(str: string): string {
  return str
    .replace(/_/g, " ") // アンダースコアをスペースに置換
    .replace(/([A-Z])/g, " $1") // キャメルケースの単語を分割
    .toLowerCase() // すべて小文字に変換
    .replace(/^\w/, (c) => c.toUpperCase()) // 先頭の文字を大文字に変換
    .replace(/\s+/g, " ") // 連続するスペースを単一のスペースに置換
    .trim(); // 前後のスペースを削除
}
