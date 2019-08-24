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
    // table页面数据获取
    getTableData(queryPage){
        return request({
            url:'https://www.easy-mock.com/mock/592501a391470c0ac1fab128/ms/table/list',
            method:'post',
            data:queryPage
        })
    } 
}