import request from '@/utils/request.js'
export default{
    getproductencode(productId){
        return request({
            url: `/product/getByProId/${productId}`,
            method: 'get'
        })
    },
    getCart(userId){
        return request({
            url:`/cart/test/userCart/${userId}`,
            method:'get'
        })
    }
}