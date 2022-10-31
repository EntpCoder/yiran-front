import axios from 'axios'
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
// http response 拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log(error)
    return Promise.reject(error.response)   // 返回接口返回的错误信息
});
export default service