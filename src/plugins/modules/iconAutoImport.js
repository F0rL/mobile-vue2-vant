/*
 * @Author: xiongfang
 * @Date: 2021-12-07 17:58:30
 * @LastEditTime: 2021-12-07 17:58:30
 * @LastEditors: xiongfang
 * @Description: svg图标自动引入
 * @FilePath: \client\src\plugins\modules\iconAutoImport.js
 */
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('@/icons', false, /\.svg$/)
requireAll(req)
