const modeUrlObj = {
    // 生产环境
    'production':{
        baseURL:'http://localhost:8080/',
        authBaseURL:''
    },
    // 开发环境
    'development': {
      baseURL: 'http://192.168.2.30:8080/',
      authBaseURL: ''
    },
    // 测试环境
    'test': {
      baseURL: 'http://192.168.2.30:8080/',
      authBaseURL: ''
    }
}
export default modeUrlObj[process.env.NODE_ENV]