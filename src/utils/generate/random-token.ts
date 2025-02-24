/**
 * ランダムなトークンを生成する関数
 *
 * @returns ランダムな16進数のトークン（40文字）
 *
 * @example
 * ```typescript
 * const token = generateRandomToken();
 * console.log(token); // "4a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b"
 * ```
 */
export function generateRandomToken(): string {
  // 20バイトのランダムなバイト配列を生成
  const array = new Uint8Array(20);
  crypto.getRandomValues(array);

  // バイト配列を16進数の文字列に変換し、結合してトークンを生成
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join(
    ""
  );
}
