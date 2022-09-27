import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入全局组件
import TypeNav from '@/components/TypeNav'

Vue.component('TypeNav', TypeNav)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
