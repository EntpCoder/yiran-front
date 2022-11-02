import request from '@/utils/request'
export default {
    getreceiveAddress(){
    return request({
        url: '/receiveAddress/getUserAddress',
        method: 'get'
    })
  }
}