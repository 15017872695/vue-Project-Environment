<template>
    <div class="login">
        <div class="loginFrom">
            <div class='loginFromWapper'>
                <img src="@/assets/img/HTMLicon.png" alt="" style="width:20%;margin-top:45px;margin-bottom:25px;">
                <el-input placeholder="请输入用户名" v-model="userName" autocomplete="off" clearable>
                    <el-button slot="prepend" icon="el-icon-setting">
                    </el-button>
                </el-input>
                <el-input placeholder="请输入密码" v-model="passWord" autocomplete="off" show-password>
                    <el-button slot="prepend" icon="el-icon-view"></el-button>
                </el-input>
                <SliderVerificationCode v-model="value"  inactiveValue="未解锁" activeValue="已解锁" @change="handleChange(value)"/>
                <el-button type="primary" :loading="loginBln" @click='goHome'>登录</el-button>
                <div class="zhuce">
                    <p class="login-tips">Tips : 登录去展开您的新世界吧。</p>
                    <span>注 册</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import $http from "@/api/user.js";
    import auth from '@/utils/auth';
    export default {
        name: 'login',
        data() {
            return {
                userName: 'admin',
                passWord: '123456',
                loginBln: false,
                wxInfo:null,
                value:'未解锁'
            }
        },
        methods: {
            goHome:function(){
                var _this = this;
                // 发送请求获取必要参数
                // $http.getWXSDKInfo().then((data)=>{
                //     _this.wxInfo = JSON.parse(data._data);
                //     console.log(_this.wxInfo)
                //     // 配置
                //     _this.wx.config({
                //         debug: false,// 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                //         appId: _this.wxInfo.AppID, // 必填，公众号的唯一标识
                //         timestamp:_this.wxInfo.timestamp , // 必填，生成签名的时间戳
                //         nonceStr: _this.wxInfo.nonceStr, // 必填，生成签名的随机串
                //         signature:_this.wxInfo.signature,// 必填，签名
                //         jsApiList:['onMenuShareTimeline','onMenuShareAppMessage','hideMenuItems','showMenuItems','showAllNonBaseMenuItem','hideAllNonBaseMenuItem','startRecord','stopRecord','onVoiceRecordEnd','uploadVoice','downloadVoice','playVoice','onVoicePlayEnd','pauseVoice','stopVoice','openLocation','getLocation','chooseWXPay','onMenuShareQQ','scanQRCode'], // 必填，需要使用的JS接口列表
                //     })
                //     _this.scan();
                //     _this.wx.error((res)=>{
                //         alert(res);
                //     });
                // }).catch((err)=> {
                //     console.log(err)
                // })

                if(this.value!='已解锁'){
                    this.$message({
                        message: '请完成滑动验证！',
                        type: 'error'
                    });
                    return false;
                }
                if(this.userName == 'admin' && this.passWord == '123456'){
                    this.$message({
                        message: '登录成功，欢迎来到我的后台',
                        type: 'success'
                    });
                    localStorage.setItem('token','yesLogin');
                    this.$router.push({path:'/dashboard'})
                }else{
                    this.$message({
                        message: '登录失败，请确认账号/密码是否正确',
                        type: 'error'
                    });
                    return false;
                }
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
            },
            handleChange(value){
                console.log('您验证结果为:',value);
            }
        },
        mounted() {
            this.$notification({
                title: '系统消息',
                message: '账号：admin 密码：123456',
                iconClass:'el-icon-s-comment',
                duration: 0
            });
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
        height: auto;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        padding-bottom: 10px;
        box-sizing: border-box;
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
        border: 1px solid #409EFF;
    }
    .login-tips{
        color: #fff;
    }
    .app-drag{
        width: 65%;
        margin-top: 5px;
    }
</style>
<style>
    .el-input-group__append, .el-input-group__prepend{
        padding: 0px;
    }
</style>