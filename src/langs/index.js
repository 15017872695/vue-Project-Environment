/**
 * Created by OXOYO on 2019/5/29.
 *
 *
 */
// 导入iview语言包
import _en from '../../node_modules/iview/dist/locale/en-US'
import _zh from '../../node_modules/iview/dist/locale/zh-CN'

// 导入系统语言包
import zh from './zh-CN'
import en from './en-US'

export default {
  label: {
    'zh-CN': '简体中文',
    'en-US': 'English'
  },
  icon: {
    'zh-CN': require('@/assets/img/langs/zh-CN.png'),
    'en-US': require('@/assets/img/langs/en-US.png')
  },
  data: {
    'zh-CN': { ..._zh, ...zh },
    'en-US': { ..._en, ...en }
  }
}
