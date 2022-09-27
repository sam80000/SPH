import Vue from 'vue'
import Vuex from 'vuex'

// 引入仓库
import home from './home'
import search from './search'

Vue.use(Vuex)

// 对外暴露Vuex的store实例
export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home,
    search
  }
})
