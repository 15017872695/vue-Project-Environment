import request from '@/utils/request';

export default{
    // 登录
    login(data){
        return request({
            url:'',
            method:'post',
            data
        })
    },
    // 获取用户信息
    getUserInfo (){
        return request({
            url:'',
            method:'get',
        })
    },
     // 获取微信SDK数据
     getWXSDKInfo (){
        return request({
            url:'http://hyfpc.fangcuanhuoxitong.com/MobileApi/BaseParam/GetWxConfig',
            method:'get',
        })
    },
}