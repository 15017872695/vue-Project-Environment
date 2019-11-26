<template>
    <div>
        <Editor></Editor>
    </div>
</template>
<script>
import G6 from '@antv/g6';
import Editor from '@/components/Editor/Index'
export default {
    name:'antVG6',
    data(){
        return{

        }
    },
    components: {
      Editor
    },
    created() {
        // 阻止浏览器默认右键菜单
      document.oncontextmenu = function (event) {
        if (event.stopPropagation) {
          event.stopPropagation()
        }
        if (event.preventDefault) {
          event.preventDefault()
        }
      }
    }
}
</script>
<style lang="scss" scoped>

</style>