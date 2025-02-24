/**
 * 文字列をスネークケースに変換する関数
 *
 * @param str - 変換対象の文字列
 * @returns スネークケースに変換された文字列
 *
 * @example
 * ```typescript
 * const snakeCase = toSnakeCase("helloWorld");
 * console.log(snakeCase); // "hello_world"
 * ```
 */
export function toSnakeCase(str: string): string {
  return str.replace(/([A-Z])/g, "_$1").toLowerCase();
}
