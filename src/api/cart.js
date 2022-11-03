import request from '@/utils/request'
export default {
  getCart() {
    return request({
      url: `/cart/userCart`,
      method: 'get'
    })
  },
  deleleCartById(cartId) {
    return request({
      url: `/cart/deleteCart/${cartId}`,
      method: 'delete'
    })
  },
  updataNums(cart){
    return request({
      url: `/cart/updateNums`,
      method: 'post',
      data:{cartId:cart.cartId,nums:cart.nums}
    })
  },
  addCart(proInfoId,nums){
    return request({
      url: `/cart/save`,
      method: 'post',
      data:{proAttributeInfoId:proInfoId,nums:nums}
    })
  }
}