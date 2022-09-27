/**
 * 封装axios
 */

// 引入axios
import axios from 'axios'

// 引入进度条和样式
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 封装
const qingqiu = axios.create({
  // 基础url
  baseURL: 'http://localhost:8080/api',
  // 请求时间
  timeout: 5000,
  // 请求头信息
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

// 请求拦截器
axios.interceptors.request.use((config) => {
  // 进度条开始
  nProgress.start()
  return config
})
// 响应拦截器,有两个回调，成功和失败
axios.interceptors.response.use(
  (res) => {
    // 进度条结束
    nProgress.done()
    return res.data
  },
  (error) => {
    return Promise.reject(error)
  })
// 抛出封装后的
export default qingqiu
