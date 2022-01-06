/*
 * @Author: xiongfang
 * @Date: 2022-01-06 10:08:19
 * @LastEditTime: 2022-01-06 10:08:19
 * @LastEditors: xiongfang
 * @Description: eruda引入方法
 * @FilePath: \mobile-vue2-vant\src\utils\eruda.js
 */
const initEruda = () => {
  const npmLink = 'https://cdn.jsdelivr.net/npm/eruda'
  const scripts = Array.from(document.querySelectorAll('body > script'))
  const index = scripts.findIndex(i => i.src === npmLink)
  if (index === -1) {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/eruda'
    document.body.appendChild(script)
    script.onload = function () {
      eruda.init()
    }
  }
}

export default initEruda
