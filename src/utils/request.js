import axios from 'axios'
import cookie from "js-cookie"
// import { MessageBox, Message } from 'element-ui'
//import cookie from "js-cookie"
// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:2177/', // api的base_url
  timeout: 20000, // 请求超时时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
// http request 拦截器
service.interceptors.request.use(
  config => {
    // 判断是否有token
    if (cookie.get('user_token')) {
      // 把获取的token放在header中
      config.headers['token'] = cookie.get('user_token');
    }
    return config
  },
  err => {
    return Promise.reject(err);
  }
)
// http response 拦截器
service.interceptors.response.use(
  response => {
    // 如果token不存在或者过期 跳转登录页面
    if (response.data.code === 204) {
      window.location.href = "/login/account"
      return
    }
    return response.data
  },
  error => {
    console.log(error)
    return Promise.reject(error.response)   // 返回接口返回的错误信息
  });
export default service