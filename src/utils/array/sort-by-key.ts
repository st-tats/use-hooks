/**
 * オブジェクトの配列を特定のキーでソートする関数
 *
 * @param array - ソート対象のオブジェクトの配列
 * @param key - ソートに使用するキー
 * @param order - ソート順序（'asc' または 'desc'）。デフォルトは 'asc'。
 * @returns ソートされた配列
 *
 * @example
 * ```typescript
 * const users = [
 *   { name: 'Alice', age: 25 },
 *   { name: 'Bob', age: 30 },
 *   { name: 'Charlie', age: 20 },
 * ];
 *
 * const sortedByAge = sortByKey(users, 'age');
 * console.log(sortedByAge); // [{ name: 'Charlie', age: 20 }, { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]
 *
 * const sortedByNameDesc = sortByKey(users, 'name', 'desc');
 * console.log(sortedByNameDesc); // [{ name: 'Charlie', age: 20 }, { name: 'Bob', age: 30 }, { name: 'Alice', age: 25 }]
 * ```
 */
export function sortByKey<T extends Record<string, any>>(
  array: T[] | null | undefined,
  key: keyof T,
  order: "asc" | "desc" = "asc"
): T[] | null {
  if (array == null) {
    return null;
  }

  return array.slice().sort((a, b) => {
    // ソート対象のキーの値を取得
    const valueA = a[key];
    const valueB = b[key];

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
