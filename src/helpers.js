import Vue from 'vue'

export const request = function(options) {
  return Vue.http(options).catch(response => {
    // 经过验证，当相应200时，不会进入该函数；当相应500，先进入该函数，之后会执行then中的函数
    console.log('catch', response)

    // handle exception
  })
}
