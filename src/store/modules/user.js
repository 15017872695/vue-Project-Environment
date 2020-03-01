import {getToken,setToken} from '@/utils/auth';
import api from '@/api/user';

const user = {
    state:{
        token:getToken(),
    },
    mutations:{
        SET_TOKEN:(state,newVale) => {
            state.token = newVale
        },
    },
    actions: { 
        // 登录
        LOGIN ({ commit }, userInfo) {  //用户通过dispatch去提交actions中的LOGIN方法，并且传入参数
            return new Promise((resolve, reject) => {
                api.login(userInfo).then(res => {
                    if (res.code === 200) {
                        setToken(res.data)
                        commit('SET_TOKEN', res.data)
                    }
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
}

export default user