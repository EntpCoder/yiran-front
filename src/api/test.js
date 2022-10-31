import request from '@/utils/request'
export default {
  test() {
    return request({
      url: `/cart/test/userCart/101`,
      method: 'get'
    })
  }
}