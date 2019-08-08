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
}