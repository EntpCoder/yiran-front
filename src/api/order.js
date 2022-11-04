import request from '@/utils/request'
export default {
    createOrder(addressId, cartIds) {
        return request({
            url: `/order/createOrder?receiveId=${addressId}&${cartIds}`,
            method: 'get',
        })
    },
    createOrderWithCoupon(addressId, receiveCouponId, cartIds){
        return request({
            url: `/order/createOrder?receiveId=${addressId}&receiveCouponId=${receiveCouponId}&${cartIds}`,
            method: 'get',
        })
    }
}