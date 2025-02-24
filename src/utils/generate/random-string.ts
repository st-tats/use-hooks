/**
 * 入力値を基にランダムな文字列を生成する関数
 *
 * @param inputValue - ハッシュ化する入力値
 * @returns 入力値をSHA-256でハッシュ化した16進数の文字列
 *
 * @example
 * ```typescript
 * const randomString = await generateRandomString("example");
 * console.log(randomString); // "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8"
 * ```
 */
export async function generateRandomString(
  inputValue: string
): Promise<string> {
  // 入力値をUTF-8エンコードされたバイト配列に変換
  const encoder = new TextEncoder();
  const data = encoder.encode(inputValue);

  // SHA-256アルゴリズムでハッシュ化
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  // ハッシュ化されたバイト配列を16進数の文字列に変換し、結合して返す
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}
