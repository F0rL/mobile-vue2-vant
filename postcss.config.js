/*
 * @Author: xiongfang
 * @Date: 2021-12-08 16:01:59
 * @LastEditTime: 2021-12-08 16:01:59
 * @LastEditors: xiongfang
 * @Description: postcss配置
 * @FilePath: \client\postcss.config.js
 */
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375
    }
  }
}
