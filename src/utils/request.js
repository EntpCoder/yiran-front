import axios from 'axios'
// import { MessageBox, Message } from 'element-ui'
//import cookie from "js-cookie"
// 创建axios实例
const service = axios.create({
  baseURL: 'https://api.github.com/', // api的base_url
  timeout: 20000 // 请求超时时间
})
// http response 拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error.response)   // 返回接口返回的错误信息
});
export default service