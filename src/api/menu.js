import request from '@/utils/request'
export default {
  getMenu() {
    return request({
      url: `/menu/getMenuTree`,
      method: 'get'
    })
  }
}