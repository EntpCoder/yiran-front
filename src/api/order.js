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
    },
    getOrdersByStatus(orderState){
        return request({
            url: `/order/getOrdersByStatus?orderState=${orderState}`,
            method: 'get',
        })
    },
    getOrderDetails(orderId){
        return request({
            url: `/order/getOrderDetailsByOrderId/${orderId}`,
            method: 'get',
        })
    },
    confirmReceipt(orderId){
        return request({
            url: `/order/updateOrderStatusByOrderId/${orderId}`,
            method: 'get',
        })
    }
}