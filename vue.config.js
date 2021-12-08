/*
 * @Author: xiongfang
 * @Date: 2021-12-07 18:07:01
 * @LastEditTime: 2021-12-07 18:12:55
 * @LastEditors: xiongfang
 * @Description:
 * @FilePath: \client\vue.config.js
 */

const path = require('path')
//将传入的相对路径转换为绝对路径
function resolve(dir) {
  return path.join(__dirname, dir) //__dirname为当前文件所在路径,dir是传递进来的相对路径
}

module.exports = {
  chainWebpack: config => {
    // svg-sprite-loader 配置
    config.module.rules.delete('svg')
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include.add(resolve('src/icons')) //处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  }
}
