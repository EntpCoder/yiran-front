import request from '@/utils/request'
export default {
    sendMsm(phoneNum){
        return request({
          url: `/msm/sendMsm/?phoneNum=${phoneNum}`,
          method: 'get'
        })
      },
      getMsg(phoneNum,code){
        return request({
          url: `msm/getMsg/?phoneNum=${phoneNum}&code=${code}`
        })
      },
      phoneLogin(user) {
        return request({
          url: `/user/phoneLogin`,
          method: 'post',
          data:{phoneNum:user.phone}
        })
      }
}