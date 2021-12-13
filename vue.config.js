/*
 * @Author: xiongfang
 * @Date: 2021-12-07 18:07:01
 * @LastEditTime: 2021-12-13 17:37:57
 * @LastEditors: xiongfang
 * @Description:
 * @FilePath: \mobile-vue2-vant\vue.config.js
 */

const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

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

    // 打包分割
    config.when(process.env.NODE_ENV !== 'development', config => {
      config.performance.set('hints', false)
      config.devtool('none')
      // loadsh按需引入
      config.plugin('loadshReplace').use(new LodashModuleReplacementPlugin())
      config.optimization.splitChunks({
        automaticNameDelimiter: '-',
        chunks: 'all',
        cacheGroups: {
          chunk: {
            name: 'vab-chunk',
            test: /[\\/]node_modules[\\/]/,
            minSize: 131072,
            maxSize: 524288,
            chunks: 'async',
            minChunks: 2,
            priority: 10
          },
          vue: {
            name: 'vue',
            test: /[\\/]node_modules[\\/](vue(.*)|core-js)[\\/]/,
            chunks: 'initial',
            priority: 20
          },
          vant: {
            name: 'vant',
            test: /[\\/]node_modules[\\/]vant(.*)[\\/]/,
            priority: 30
          }
        }
      })
    })
    // 分析工具
    if (process.env.use_analyzer) {
      // 添加分析工具
      config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin)
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/style/variables.less')]
    }
  }
}
