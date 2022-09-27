import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件到映射
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'

/**
 * 为了解决编程式导航push多次点击报错，决定重写$router.push方法
 * push方法返回的是一个promis对象，所以需要修改状态
 */

// 先获取保存原始的$router.push
const originPush = VueRouter.prototype.push

// 重写push|replace
// 第一个参数：路径参数
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => {}, () => {})
  }
}

// 保存原生replace
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => {}, () => {})
  }
}
// 注册路由
Vue.use(VueRouter)

const routes = [
  /**
   * 路由路径
   */
  {
    path: '/home',
    component: Home,
    // 路由元信息 $route.meta.xx 获取对应的值
    meta: {
      show: true
    }
  },
  {
    path: '/login',
    component: Login,
    // 路由元信息 $route.meta.xx 获取对应的值
    meta: {
      show: false
    }
  },
  {
    path: '/register',
    component: Register,
    // 路由元信息 $route.meta.xx 获取对应的值
    meta: {
      show: false
    }
  },
  {
    name: 'search',
    path: '/search/:searchKey?',
    component: Search,
    // 路由元信息 $route.meta.xx 获取对应的值
    meta: {
      show: true
    },
    props: $route => ({ keyword: $route.params.searchKey, query: $route.query.k })

  },

  /**
   * 重定向
   */
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
