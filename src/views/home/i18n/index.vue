<template>
    <div>
        <new-Component></new-Component>
    </div>
</template>
<script>
import newComponent from '../../../components/newComponent';
export default {
    name:'i18n',
    data(){
        return {

        }
    },
    components:{
        'new-Component':newComponent
    }
}
</script>
<style scope>

</style>