import Vue from 'vue';

// 封装按需引入 Element
import {   Button,
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
           Breadcrumb,
           BreadcrumbItem,
           Card,
           Progress,
           Table,
           TableColumn,
           Tag,
           Pagination,
           Message,
           DatePicker,
           Tabs,
           TabPane,
           Checkbox,
           Radio,
           Switch,
           TimePicker,
           CheckboxGroup,
           RadioGroup,
           Upload,
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
    Vue.use(BreadcrumbItem)
    Vue.use(Breadcrumb) 
    Vue.use(Card)
    Vue.use(Progress)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Tag)
    Vue.use(Pagination)
    Vue.use(Message)
    Vue.use(DatePicker)
    Vue.use(Tabs)
    Vue.use(TabPane)
    Vue.use(Checkbox)
    Vue.use(Radio)
    Vue.use(Switch)
    Vue.use(TimePicker)
    Vue.use(CheckboxGroup)
    Vue.use(RadioGroup)
    Vue.use(Upload)
  }
 }
 export default element

 Vue.prototype.$message = Message