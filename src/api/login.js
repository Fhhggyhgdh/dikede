import request from '@/utils/request'

/**
 * 登录
 * @param {Object} data 登录需要提交的信息
 * @returns Promise
 */
export function login(data) {
  return request({
    url: '/user-service/user/login',
    method: 'POST',
    data
  })
}

/**
 *图片验证码
 * @param {String} clientToken 图片验证码
 * @returns Promise
 */
export function imageCodeAPI(clientToken) {
  return request({
    url: `/user-service/user/imageCode/${clientToken}`
  })
}

/**
 * 上传图片
 * @param {file} data 上传验证码的图片
 */
export function logout(data) {
  return request({
    url: '/vm-service/sku/fileUpload',
    method: 'POST',
    data
  })
}
