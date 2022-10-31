import request from '@/utils/request'
export default {
  getCart(userId) {
    return request({
      url: `/cart/test/userCart/${userId}`,
      method: 'get'
    })
  },
  deleleCartById(cartId) {
    return request({
      url: `/cart/deleCart/${cartId}`,
      method: 'delete'
    })
  }
}