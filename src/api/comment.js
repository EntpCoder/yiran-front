import request from '@/utils/request'
export default{
    getCommentByUserId(userId){
        request({
            url:`/comments/selectByUserId/${userId}`,
            method:'get'
        })
    },
    getCommentByproId(proId){
        request({
            url:`/comments/selectbyproId/${proId}`,
            method:'get'
        })
    }
}