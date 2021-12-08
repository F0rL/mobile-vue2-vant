/*
 * @Author: xiongfang
 * @Date: 2021-12-08 15:56:28
 * @LastEditTime: 2021-12-08 15:56:28
 * @LastEditors: xiongfang
 * @Description: 检验规则
 * @FilePath: \client\src\utils\validate.js
 */
export const validatePhone = val => {
  return /^1[3456789]\d{9}$/.test(val)
}
