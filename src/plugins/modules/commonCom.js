/*
 * @Author: xiongfang
 * @Date: 2021-11-05 11:20:49
 * @LastEditTime: 2021-12-07 17:54:22
 * @LastEditors: xiongfang
 * @Description: 全局注册组件
 * @FilePath: \client\src\plugins\commonCom.js
 */
const files = require.context('@/components', true, /index\.vue$/)

const install = Vue => {
  files.keys().forEach(fileName => {
    // 获取组件配置
    const componentConfig = files(fileName)
    Vue.component(
      componentConfig.default.name, // 此处的name,是组件属性定义的name
      // 如果这个组件选项是通过 `export default` 导出的，
      // 那么就会优先使用 `.default`，
      // 否则回退到使用模块的根。
      componentConfig.default
    )
  })
}

export default {
  install
}
