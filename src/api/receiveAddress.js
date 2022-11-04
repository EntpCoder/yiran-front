import request from '@/utils/request'
export default {
    getreceiveAddress(){
    return request({
        url: '/receiveAddress/getUserAddress',
        method: 'get'
    })
},
    getaddressCart(cartIds){
    return request({
        url: `/cart/userCart?${cartIds}`,
        method: 'get'
  })
},
getsubmitOrder(userId,receiveId,receiveCouponId,cartIds){
    return request({
        url: `/order/createOrder?userId=${userId}&receiveId=${receiveId}&receiveCouponId=${receiveCouponId}&cartIds=${cartIds}`,
        method: 'get'
    })
}
}