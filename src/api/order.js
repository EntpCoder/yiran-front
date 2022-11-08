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
    },
    getOrderInfo(orderId){
        return request({
            url: `/order/getOrderAndDetail/${orderId}`,
            method: 'get',
        })
    },
    getAllOrders(){
        return request({
            url: `/order/getAllOrders`,
            method: 'get',
        })
    }
}