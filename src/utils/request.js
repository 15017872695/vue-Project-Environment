import axios from 'axios';
import config from '../config/index';//导入路径配置文件
console.log(config)
// 创建axios实例
const service = axios.create({
    baseURL:config.baseURL,//api的base_url
    timeout:10000 //请求超时时间
})

// request请求拦截器
service.interceptors.request.use(
    config => {
        // 这里可以自定义一些config配置

        return config;
    },
    error => {
        //  这里处理一些请求出错的情况

        Promise.reject(error);
    }
)

// response响应拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        // 这里处理一些response 正常放回时的逻辑

        return res;
    },
    error => {
        // 这里处理一些response 出错时的逻辑

        return Promise.reject(error)
    }
)
export default service;