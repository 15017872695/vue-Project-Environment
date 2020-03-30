const modeUrlObj = {
    // 生产环境
    'production':{
      baseURL:'http://xiaoyu.ysmgroup.cn:3000/',
      authBaseURL:''
    },
    // 开发环境
    'development': {
      baseURL: 'http://xiaoyu.ysmgroup.cn:3000/',
      authBaseURL: ''
    },
    // 测试环境
    'test': {
      baseURL: 'http://xiaoyu.ysmgroup.cn:3000/',
      authBaseURL: ''
    }
}
export default modeUrlObj[process.env.NODE_ENV]