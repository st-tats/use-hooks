import { hashPassword } from "./hash";

/**
 * パスワードとハッシュを比較する関数
 *
 * @param password - 比較対象のパスワード
 * @param hash - 比較対象のハッシュ
 * @returns パスワードをハッシュ化した結果がハッシュと一致する場合は `true`、それ以外は `false`
 *
 * @example
 * ```typescript
 * const isMatch = await comparePassword("password123", "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8");
 * console.log(isMatch); // true
 * ```
 */
export async function comparePassword(
  password: string,
  hash: string
): Promise<boolean> {
  // パスワードをハッシュ化
  const hashedPassword = await hashPassword(password);

  // ハッシュ化されたパスワードと比較対象のハッシュを比較
  return hashedPassword === hash;
}
