import request from '@/utils/request'
export default{
    getProduct(kw){
        return request({
            url: `/es/getHighProduct?kw=${kw}`,
            method: `get`
        })
    }
}