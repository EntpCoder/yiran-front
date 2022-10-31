import request from '@/utils/request'
export default {
  test() {
    return request({
      url: `search/users?q=123`,
      method: 'get'
    })
  }
}