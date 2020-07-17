import request from '@/utils/request'

export function login(params) {
  return request({
    url: 'http://www.kuaiwan.club/index.php/index/index/login_check',
    method: 'post',
    params
  })
}
export function register(params) {
  return request({
    url: 'http://www.kuaiwan.club/index.php/index/index/signup_check',
    method: 'post',
    params
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
export function getfoodList(params) {
  return request({
    url: '/vue-admin-template/food/list',
    method: 'get',
    params
  })
}
