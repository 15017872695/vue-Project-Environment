<template>
    <div class="login">
        <div class="loginFrom">
            <div class='loginFromWapper'>
                <img src="@/assets/img/HTMLicon.png" alt="" style="width:20%;margin-top:45px;margin-bottom:25px;">
                <el-input placeholder="请输入用户名" v-model="input" autocomplete="off" clearable>
                    <el-button slot="prepend" icon="el-icon-setting">
                    </el-button>
                </el-input>
                <el-input placeholder="请输入密码" v-model="password" autocomplete="off" show-password>
                    <el-button slot="prepend" icon="el-icon-view"></el-button>
                </el-input>
                <el-button type="primary" :loading="loginBln" @click='goHome'>登录</el-button>
                <div class="zhuce">
                    <p class="login-tips">Tips : 用户名和密码随便填。</p>
                    <span>注 册</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import $http from "@/api/user.js";
    export default {
        name: 'login',
        data: function () {
            return {
                input: '',
                password: '',
                loginBln: false,
                wxInfo:null
            }
        },
        methods: {
            goHome:function(){
                var _this = this;
                // 发送请求获取必要参数
                $http.getWXSDKInfo().then(function(data){
                    _this.wxInfo = JSON.parse(data._data);
                    // console.log(_this.wxInfo)
                    // 配置
                    _this.wx.config({
                        debug: false,// 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: _this.wxInfo.AppID, // 必填，公众号的唯一标识
                        timestamp:_this.wxInfo.timestamp , // 必填，生成签名的时间戳
                        nonceStr: _this.wxInfo.nonceStr, // 必填，生成签名的随机串
                        signature:_this.wxInfo.signature,// 必填，签名
                        jsApiList:['onMenuShareTimeline','onMenuShareAppMessage','hideMenuItems','showMenuItems','showAllNonBaseMenuItem','hideAllNonBaseMenuItem','startRecord','stopRecord','onVoiceRecordEnd','uploadVoice','downloadVoice','playVoice','onVoicePlayEnd','pauseVoice','stopVoice','openLocation','getLocation','chooseWXPay','onMenuShareQQ','scanQRCode'], // 必填，需要使用的JS接口列表
                    })
                    _this.scan();
                    _this.wx.error(function (res) {
                        alert(res);
                    });
                }).catch(function (err) {
                    // console.log(err)
                })
                this.$router.push({path:'/dashboard'})
            },
            scan(){
                var _this = this;
                _this.wx.ready(function(){
                    _this.wx.scanQRCode({
                        needResult : 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果
                        success : function(res) {
                            var data = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                            var result  = data.split(',')[1];//返回的结果是码的类型+‘,’+内容，所以要以数组分割取第二个。
                            //处理自己的逻辑
                        }
                    });             
                })
            }
        },
        mounted() {
            
        },
    }
</script>
<style scoped lang="scss">
    .login {
        width: 100%;
        height: 100%;
        background: url('../../assets/img/loginBG.jpg') no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .loginFrom {
        width: 400px;
        height: 400px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
    }

    .loginFromWapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .el-button--primary{
        width: 65%;
    }

    .el-input--suffix {
        width: 65%;
        margin-top: 20px;
    }

    .el-button {
        margin-top: 20px;
    }

    .zhuce {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        color: #409EFF;
        font-size: 15px;
        margin-top:30px;
        cursor: pointer;
    }
    .el-button--default{
        margin:0px;
    }
    .zhuce span {
        padding: 3px 5px;
        border-bottom: 1px solid #409EFF;
    }
    .login-tips{
        color: #fff;
    }

</style>
<style>
    .el-input-group__append, .el-input-group__prepend{
        padding: 0px;
    }
</style>