import { isArray } from "./is-array";
import { isNumber } from "./is-number";
import { isObject } from "./is-object";
import { isString } from "./is-string";

/**
 * 型判定のユーティリティ関数をまとめたオブジェクト
 */
export const TypeChecker = {
  /**
   * 引数が文字列かどうかを判定する
   * @param str - 判定対象の値
   * @returns 文字列であれば `true`
   */
  isString,

  /**
   * 引数が配列かどうかを判定する
   * @param arr - 判定対象の値
   * @returns 配列であれば `true`
   */
  isArray,

  /**
   * 引数がオブジェクトかどうかを判定する
   * @param obj - 判定対象の値
   * @returns オブジェクトであれば `true`
   */
  isObject,

  /**
   * 引数が数字かどうかを判定する
   * @param num - 判定対象の値
   * @returns 数字であれば `true`
   */
  isNumber,
};
