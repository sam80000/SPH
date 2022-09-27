// home 数据仓库模块

// 引入封装axios
import { qingqius } from '@/api'

const state = {
  // 3.给个默认参数接受请求数据
  categoryList: {}
}

const mutations = {
  // 2.编写mutation，将获取的值修改
  CATEGORYLIST (state, categoryList) {
    state.categoryList = JSON.parse(categoryList.substr(0, categoryList.length - 1))
  }
}

const actions = {
  // 1. 通过api发请求获取数据.用async await拿到 promise成功结果。
  async categoryList ({ commit }) {
    const result = await qingqius()

    if (result.status == '200') {
      // 将获取到的值提交给mutation
      commit('CATEGORYLIST', result.data.trim())
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
