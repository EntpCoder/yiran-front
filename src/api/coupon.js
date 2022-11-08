import request from '@/utils/request'
export default {
  getCouponDiscountAmount(receiveId) {
    return request({
      url: `/coupon/getDiscountAmount/${receiveId}`,
      method: 'get'
    })
  },
  getCouponList(){
    return request({
      url: `/coupon/getCouponList/`,
      method: 'get'
    })
  },
  getReceiveCoupon(couponId){
    return request({
      url: `/coupon/getReceiveCoupon?couponId=${couponId}`,
      method: 'get'
    })
  },
  getUsableCoupon(){
    return request({
      url:`/coupon/getUsableCoupon`,
      method:`get`
    })
  },
  getFailureCoupon(){
    return request({
      url:`/coupon/getFailureCoupon`,
      method:`get`
    })
  },
  getUsedCoupon(){
    return request({
      url:`/coupon/getUsedCoupon`,
      method:`get`
    })
  },
}