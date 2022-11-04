import request from '@/utils/request'
export default{
    getCommentByproId(proId){
        return request({
            url:`/comments/selectbyproId/${proId}`,
            method:'get'
        })
    }
}