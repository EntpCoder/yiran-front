import request from '@/utils/request'
export default {
  accountLogin(user) {
    return request({
      url: `/user/accountLogin`,
      method: 'post',
      data:{userName:user.username,password:user.password}
    })
  }
}