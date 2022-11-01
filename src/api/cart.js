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
      url: `/cart/deleCart/${cartId}`,
      method: 'delete'
    })
  },
  updataNums(cart){
    return request({
      url: `/cart/updataNums`,
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