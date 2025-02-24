/**
 * ネストされたキーでオブジェクトの配列をソートする関数
 *
 * @param array - ソート対象のオブジェクトの配列
 * @param keyPath - ネストされたキーのパス（例: 'profile.age'）
 * @param order - ソート順序（'asc' または 'desc'）。デフォルトは 'asc'。
 * @returns ソートされた配列
 *
 * @example
 * ```typescript
 * const users = [
 *   { name: 'Alice', profile: { age: 25 } },
 *   { name: 'Bob', profile: { age: 30 } },
 *   { name: 'Charlie', profile: { age: 20 } },
 * ];
 *
 * const sortedByAge = sortByNestedKey(users, 'profile.age');
 * console.log(sortedByAge); // [{ name: 'Charlie', profile: { age: 20 } }, { name: 'Alice', profile: { age: 25 } }, { name: 'Bob', profile: { age: 30 } }]
 * ```
 */
export function sortByNestedKey<T extends Record<string, any>>(
  array: T[],
  keyPath: string,
  order: "asc" | "desc" = "asc"
): T[] {
  return array.slice().sort((a, b) => {
    // ネストされたキーの値を取得
    const valueA = keyPath.split(".").reduce((obj, key) => obj[key], a);
    const valueB = keyPath.split(".").reduce((obj, key) => obj[key], b);

    // 値の比較
    if (valueA < valueB) {
      return order === "asc" ? -1 : 1;
    }
    if (valueA > valueB) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
  });
}
