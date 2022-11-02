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
        url: `/product/getFiltrate?kindId=${kindId}`,
        method: 'get'
      })
    },
    getFiltrateByBrandId(brandId) {
      return request({
        url: `/product/getFiltrate?brandId=${brandId}`,
        method: 'get'
      })
    },
    getByBrandKindSizeColor(brandArrId,kindIdArr,sizeIdArr,colorIdArr){
      return request({
        url: `/product/getByBrandKindSizeColor?brandIdArr=${brandArrId}&kindIdArr=${kindIdArr}&sizeIdArr=${sizeIdArr}&colorIdArr=${colorIdArr}`,
        method: 'get'
      })
    },
    getProductInfoId(proId,colorId,sizeId){
      return request({
        url: `/product/getProInfoId/${proId}/${colorId}/${sizeId}`,
        method: 'get'
      })
    }
}