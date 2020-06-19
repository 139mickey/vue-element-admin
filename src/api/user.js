import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login', // '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: 'v1/user/info', // '/vue-element-admin/user/info',
    method: 'get',
    // params: {token}
  })
}

export function logout() {
  return request({
    url: '/logout', // '/vue-element-admin/user/logout',
    method: 'post'
  })
}
