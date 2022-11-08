import request from '@/utils/request'
export default {
sendMsm(phoneNum){
        return request({
            url: `/msm/sendMsm/?phoneNum=${phoneNum}`,
            method: 'get'
        })
    },
toRegister(phoneNum,password,message){
        return request({
            url: `/user/register/?phoneNum=${phoneNum}&password=${password}&message=${message}`,
            method: 'get'
        })
    }
}