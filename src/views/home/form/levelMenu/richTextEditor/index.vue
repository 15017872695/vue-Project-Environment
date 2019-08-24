<template>
    <div class='richTextEditor'>
        <el-row :gutter="20" style='width:100%;height:100%;margin:0px;'>
            <el-col :span="24" style='padding:0px;height:100%;'>
                <el-card class="FromCardWapper">
                    <div class="plugins-tips">
                        Vue-Quill-Editor：基于Quill、适用于Vue2的富文本编辑器。
                        访问地址：<a href="https://github.com/surmon-china/vue-quill-editor" target="_blank">vue-quill-editor</a>
                    </div>
                    <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
                    <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import { quillEditor } from 'vue-quill-editor';
export default {
    name:'richTextEditor',
    data: function(){
            return {
                content: '安装插件npm install vue-quill-editor      /      安装依赖npm install quill',
                editorOption: {
                    placeholder: 'Hello World'
                }
            }
        },
        components: {
            quillEditor
        },
        methods: {
            onEditorChange({ editor, html, text }) {
                this.content = html;
            },
            submit(){
                console.log(this.content);
                this.$message.success('提交成功！');
            }
        }
}
</script>
<style scope>
    .richTextEditor{
        width: 100%;
        height: 100%;
    }
    .FromCardWapper{
        height:600px;
    }
    .FromCardWapper .el-card__body{
        
        width: 100%;
        height: 100%;
        padding: 0 20px !important;
        box-sizing: border-box;
    }
    .editor-btn{
        margin-top: 4%;
    }
    .plugins-tips{
        padding: 20px;
        box-sizing: border-box;
    }
    .quill-editor{
        height:70%;
    }
</style>