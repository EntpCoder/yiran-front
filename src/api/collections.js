import request from '@/utils/request'
export default {
    viewMyCollections() {
        return request({
            url: `/collections/userCollection`,
            method: 'get'
        })
    },
    addCollection(proId){
        return request({
            url: `/collections/increaseCollections`,
            method: 'post',
            data:{proId}
        })
    },
    unAddCollection(proId){
        return request({
            url: `/collections/deletCollection`,
            method: 'delete',
            data:{proId}
        })
    },
    chaxun(proId){
        return request({
            url: `/collections/chaxun?proId=${proId}`,
            method: 'get'
        })
    }
}