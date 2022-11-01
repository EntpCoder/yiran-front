import request from '@/utils/request'
export default {
    getProListByBrandId(brandId) {
      return request({
        url: `/product/getByBrandName/${brandId}`,
        method: 'get'
      })
    },
    getProListByKindId(kindId) {
      return request({
        url: `/product/getByKindId/${kindId}`,
        method: 'get'
      })
    },
    getFiltrateByKindId(kindId) {
      return request({
        url: `/product/getFiltrate/${kindId}`,
        method: 'get'
      })
    },
    getFiltrateByBrandId(brandId) {
      return request({
        url: `/product/getFiltrate/${brandId}`,
        method: 'get'
      })
    },

}