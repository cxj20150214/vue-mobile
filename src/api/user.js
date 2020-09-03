import request from '@/utils/request'
// 登录
export function login(params) {
  return request({
    url: 'http://www.kuaiwan.club/index.php/index/index/login_check',
    method: 'post',
    params
  })
}
// 注册
export function register(params) {
  return request({
    url: 'http://www.kuaiwan.club/index.php/index/index/signup_check',
    method: 'post',
    params
  })
}
// 上传食谱
export function upload(params) {
  return request({
    url: 'http://www.kuaiwan.club/index.php/index/index/uploadfood',
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
    url: 'http://www.kuaiwan.club/index.php/index/index/food_list',
    method: 'get',
    params
  })
}
export function detail(params) {
  return request({
    url: 'http://www.kuaiwan.club/index.php/index/index/food_detail',
    method: 'get',
    params
  })
}
