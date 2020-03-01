import request from '@/utils/request';

// 由于 已在axios中配置了默认域名，所以在以后的请求中，可不在需要填写域名

export default{
    // 登录
    login(data){
        console.log(data)
        return request({
            url:'/user/login',
            method:'GET',
            params:data
        })
    },
    //注册
    register(data){
        return request({
            url:'/user/register',
            method:'POST',
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
            url:'/MobileApi/BaseParam/GetWxConfig',
            method:'get',
        })
    },
    // table页面数据获取
    getTableData(queryPage){
        return request({
            url:'https://www.easy-mock.com/mock/592501a391470c0ac1fab128/ms/table/list',
            method:'post',
            data:queryPage
        })
    }
}