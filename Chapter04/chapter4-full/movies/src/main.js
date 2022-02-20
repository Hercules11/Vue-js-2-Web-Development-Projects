import 'babel-polyfill'
import Vue from 'vue'
import Movies from './Movies.vue'



// Babel 是一个广泛使用的ES6 转码器，可以将ES6 代码转为ES5 代码。
// 注意：Babel 默认只转换新的JavaScript 句法（syntax），而不转换新的API。
// Polyfill: Polyfill的准确意思为，用于实现浏览器并不支持的原生API的代码
new Vue({
  el: '#app',
  ...Movies,
})
