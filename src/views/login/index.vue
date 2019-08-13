<template>
    <div class="login">
        <div class="loginFrom">
            <div class='loginFromWapper'>
                <img src="@/assets/img/HTMLicon.png" alt="" style="width:20%;margin-top:45px;margin-bottom:25px;">
                <el-input placeholder="请输入用户名" v-model="input" autocomplete="off" clearable></el-input>
                <el-input placeholder="请输入密码" v-model="password" autocomplete="off" show-password></el-input>
                <el-button type="primary" :loading="loginBln">登录</el-button>
                <div class="zhuce">
                    <span>注 册</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'login',
        data: function () {
            return {
                input: '',
                password: '',
                loginBln: false
            }
        }
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
        background: rgba(0, 0, 0, 0.4);
        border-radius: 10px;
    }

    .loginFromWapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .el-input--suffix {
        width: 65%;
        margin-top: 20px;
    }

    .el-button {
        margin-top: 30px;
    }

    .zhuce {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        color: #409EFF;
        font-size: 15px;
        margin-top: 20px;
        cursor: pointer;
    }

    .zhuce span {
        padding: 0px 5px;
        border-bottom: 1px solid #409EFF;
    }
</style>