/**
 * バイト数を適切な単位にフォーマットする関数
 *
 * @param bytes - フォーマット対象のバイト数。`null` または `undefined` の場合は `null` を返す。
 * @param opts - オプション
 * @param opts.decimals - 小数点以下の桁数。デフォルトは 0。
 * @param opts.sizeType - 単位のタイプ。'accurate' または 'normal'。デフォルトは 'normal'。
 * @returns フォーマットされた文字列（例: "1.23 MB"）。無効な入力の場合は `null`。
 *
 * @example
 * ```typescript
 * const formattedBytes = formatBytes(1024);
 * console.log(formattedBytes); // "1 KB"
 *
 * const formattedBytesAccurate = formatBytes(1024, { sizeType: 'accurate' });
 * console.log(formattedBytesAccurate); // "1 KiB"
 *
 * const formattedBytesWithDecimals = formatBytes(123456, { decimals: 2 });
 * console.log(formattedBytesWithDecimals); // "120.56 KB"
 *
 * const formattedBytesNull = formatBytes(null);
 * console.log(formattedBytesNull); // null
 * ```
 */
export function formatBytes(
  bytes: number | null | undefined,
  opts: {
    decimals?: number;
    sizeType?: "accurate" | "normal";
  } = {}
): string | null {
  if (bytes == null) {
    return null; // null または undefined の場合
  }

  // オプションのデフォルト値を設定
  const { decimals = 0, sizeType = "normal" } = opts;

  // 単位の定義
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"]; // 通常の単位
  const accurateSizes = ["Bytes", "KiB", "MiB", "GiB", "TiB"]; // 正確な単位

  // バイト数が 0 の場合は "0 Byte" を返す
  if (bytes === 0) {
    return "0 Byte";
  }

  // 適切な単位のインデックスを計算
  const i = Math.floor(Math.log(bytes) / Math.log(1024));

  // バイト数を適切な単位に変換
  const formattedValue = (bytes / Math.pow(1024, i)).toFixed(decimals);

  // 単位を選択
  const unit =
    sizeType === "accurate"
      ? accurateSizes[i] ?? "Bytes" // 正確な単位を使用
      : sizes[i] ?? "Bytes"; // 通常の単位を使用

  // フォーマットされた文字列を返す
  return `${formattedValue} ${unit}`;
}
