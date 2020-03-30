import axios from 'axios';
import config from '../config/index';//导入路径配置文件
import {ElMessage} from '../../babel-plugin-component';

// 创建axios实例
const service = axios.create({
    baseURL:config.baseURL,//api的base_url
    timeout:5000 //请求超时时间
})
// request请求拦截器
service.interceptors.request.use( 
    config => {
        // 这里可以自定义一些config配置
        console.log(config)
        return config;
    },
    error => {
        //  这里处理一些请求出错的情况
        ElMessage('客户端请求失败！','error')
        Promise.reject(error);
    }
)

// response响应拦截器
service.interceptors.response.use(
    response => {
        console.log(response)
        const res = response.data
        // 这里处理一些response 正常放回时的逻辑
        
        return res;
    },
    error => {
        // 这里处理一些response 出错时的逻辑
        ElMessage('服务端响应失败！','error')
        return Promise.reject(error)
    }
)
export default service;