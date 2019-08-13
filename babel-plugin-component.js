// 封装按需引入 Element
import { Button,
           Main,
           Select,
           Option,
           OptionGroup,
           Menu,
           Icon,
           Submenu,
           MenuItemGroup,
           MenuItem,
           Tree,
           Dialog,
           Input, 
           Row, 
           Col ,
           Container, 
           Header,
           Aside, 
           Footer,
           DropdownItem,
           Tooltip,
           Dropdown,
           DropdownMenu,
           FormItem,
           Form,
  } from 'element-ui'
 const element = {
  install: function (Vue) {
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(OptionGroup)
    Vue.use(Input)
    Vue.use(Tree)
    Vue.use(Dialog)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Button)
    Vue.use(Container)
    Vue.use(Header)
    Vue.use(Aside)
    Vue.use(Footer)
    Vue.use(Main)
    Vue.use(Menu)
    Vue.use(Submenu)
    Vue.use(MenuItemGroup)
    Vue.use(MenuItem)
    Vue.use(Icon)
    Vue.use(DropdownItem)
    Vue.use(Tooltip)
    Vue.use(Dropdown)
    Vue.use(DropdownMenu)
    Vue.use(FormItem)
    Vue.use(Form)
  }
 }
 export default element