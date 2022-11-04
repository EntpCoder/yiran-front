import request from '@/utils/request'
export default {
  getCouponDiscountAmount(receiveId) {
    return request({
      url: `/coupon/consumeCoupon/${receiveId}`,
      method: 'get'
    })
  }
}