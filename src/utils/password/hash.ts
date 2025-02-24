/**
 * パスワードをハッシュ化する関数
 *
 * @param password - ハッシュ化するパスワード
 * @returns パスワードをSHA-256でハッシュ化した16進数の文字列
 *
 * @example
 * ```typescript
 * const hashedPassword = await hashPassword("password123");
 * console.log(hashedPassword); // "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8"
 * ```
 */
export async function hashPassword(password: string): Promise<string> {
  // パスワードをUTF-8エンコードされたバイト配列に変換
  const encoder = new TextEncoder();
  const data = encoder.encode(password);

  // SHA-256アルゴリズムでハッシュ化
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  // ハッシュ化されたバイト配列を16進数の文字列に変換し、結合して返す
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}
