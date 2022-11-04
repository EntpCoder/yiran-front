import request from '@/utils/request'
export default{
    getCommentByUserId(userId){
        return request({
            url:`/comments/selectByUserId/${userId}`,
            method:'get'
        })
    },
    getCommentByproId(proId){
        return request({
            url:`/comments/selectbyproId/${proId}`,
            method:'get'
        })
    }
}