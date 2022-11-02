import request from '@/utils/request'
export default {
    getreceiveAddress(){
    return request({
        URL: '/receiveAddress/getUserAddress',
        method: 'get'
    })
  }
}