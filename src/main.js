import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/global.less'
import API from '@/api'
// 让elementui参与打包 才能运行 不用接一下
import '@/elementUI/index'
Vue.config.productionTip = false
Vue.prototype.$API = API
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
