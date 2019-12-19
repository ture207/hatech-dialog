import Vue from 'vue'
import App from './App.vue'

import hatechDialog from './index.js' //使用本地的

Vue.use(hatechDialog)

new Vue({
  el: '#app',
  render: h => h(App)
})
