import request from '@/utils/request'
export default {
  getCouponDiscountAmount(receiveId) {
    return request({
      url: `/coupon/getDiscountAmount/${receiveId}`,
      method: 'get'
    })
  }
}