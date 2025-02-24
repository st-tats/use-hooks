import { customAlphabet } from "nanoid";

// プレフィックスの定義
const prefixes = {
  task: "tsk", // タスク用のプレフィックス
};

// ID生成のオプションを定義するインターフェース
interface GenerateIdOptions {
  /**
   * 生成されるIDの長さ
   * @default 12
   * @example 12 => "abc123def456"
   */
  length?: number;

  /**
   * プレフィックスと生成されたIDの間の区切り文字
   * @default "_"
   * @example "_" => "tsk_abc123"
   */
  separator?: string;
}

/**
 * ユニークなIDを生成する関数。オプションでプレフィックスや設定を指定可能。
 *
 * @param prefixOrOptions プレフィックス文字列またはオプションオブジェクト
 * @param inputOptions ID生成のためのオプション（デフォルト値を使用）
 * @returns 生成されたID（プレフィックスが指定されている場合はプレフィックス付き）
 *
 * @example
 * ```typescript
 * generateId('task'); // "tsk_abc123def456"
 * generateId({ length: 8, separator: '-' }); // "abc123de"
 * generateId(); // "abc123def456"
 * ```
 */
export function generateId(
  prefixOrOptions?: keyof typeof prefixes | GenerateIdOptions,
  inputOptions: GenerateIdOptions = {}
): string {
  // プレフィックスまたはオプションがオブジェクトかどうかを判定
  const finalOptions =
    typeof prefixOrOptions === "object" ? prefixOrOptions : inputOptions;

  // プレフィックスを取得（オブジェクトでない場合のみ）
  const prefix =
    typeof prefixOrOptions === "object" ? undefined : prefixOrOptions;

  // オプションのデフォルト値を設定
  const { length = 12, separator = "_" } = finalOptions;

  // ランダムなIDを生成
  const id = customAlphabet(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", // 使用する文字セット
    length // IDの長さ
  )();

  // プレフィックスが指定されている場合はプレフィックス付きのIDを返す
  return prefix ? `${prefixes[prefix]}${separator}${id}` : id;
}
