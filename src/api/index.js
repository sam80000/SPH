/**
 * 管理接口
 */

import qingqiu from './axios'

export const qingqius = () => qingqiu({ url: '/topbaidu/', method: 'get' })
