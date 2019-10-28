<template>
    <div class='icon'>
        <h2>使用方法</h2>
        <p style="line-height: 50px;">
            直接通过设置类名为 el-icon-lx-iconName 来使用即可。例如：（共{{iconList.length}}个图标）
        </p>
        <p class="example-p">
            <i class="el-icon-success" style="font-size: 30px;color: #ff5900"></i>
            <span>&lt;i class=&quot;el-icon-lx-redpacket_fill&quot;&gt;&lt;/i&gt;</span>
        </p>
        <p class="example-p">
            <i class="el-icon-warning" style="font-size: 30px;color:#fd5656"></i>
            <span>&lt;i class=&quot;el-icon-lx-weibo&quot;&gt;&lt;/i&gt;</span>
        </p>
        <p class="example-p">
            <i class="el-icon-error" style="font-size: 30px;color: #ffc300"></i>
            <span>&lt;i class=&quot;el-icon-lx-emojifill&quot;&gt;&lt;/i&gt;</span>
        </p>
        <br>
        <h2>图标</h2>
            <div class="search-box">
                <el-input class="search" size="large" v-model="keyword" clearable placeholder="请输入图标名称"></el-input>
            </div>
            <ul>
                <li class="icon-li" v-for="(item,index) in list" :key="index">
                    <div class="icon-li-content">
                        <i :class="`el-icon-${item}`"></i>
                        <span>{{item}}</span>
                    </div>
                </li>
            </ul>
    </div>
</template>
<script>
    export default {
        name: 'icon',
        data: function () {
            return {
                keyword: '',
                iconList: [
                    'platform-eleme',
                    'eleme',
                    'delete-solid',
                    'delete',
                    's-tools',
                    'setting',
                    'user-solid',
                    'user',
                    'phone',
                    'phone-outline',
                    'mobile',
                    'mobilefill',
                    'voice',
                    'voicefill',
                    'unlock',
                    'lock',
                    'home',
                    'homefill',
                    'delete',
                    'deletefill',
                    'notification',
                    'notificationfill',
                    'notificationforbidfill',
                    'like',
                    'likefill',
                    'comment',
                    'commentfill',
                    'camera',
                    'camerafill',
                    'warn',
                    'warnfill',
                    'time',
                    'timefill',
                    'location',
                    'locationfill',
                    'favor',
                    'favorfill',
                    'skin',
                    'skinfill',
                    'news',
                    'newsfill',
                    'record',
                    'recordfill',
                    'emoji',
                    'emojifill',
                    'message',
                    'messagefill',
                    'goods',
                    'goodsfill',
                    'crown',
                    'crownfill',
                    'move',
                    'add',
                    'hot',
                    'hotfill',
                    'service',
                    'servicefill',
                    'present',
                    'presentfill',
                    'pic',
                    'picfill',
                    'rank',
                    'rankfill',
                    'male',
                    'female',
                    'down',
                    'top',
                    'recharge',
                    'rechargefill',
                    'forward',
                    'forwardfill',
                    'info',
                    'infofill',
                    'redpacket',
                    'redpacket_fill',
                    'roundadd',
                    'roundaddfill',
                    'friendadd',
                    'friendaddfill',
                    'cart',
                    'cartfill',
                    'more',
                    'moreandroid',
                    'back',
                    'right',
                    'shop',
                    'shopfill',
                    'question',
                    'questionfill',
                    'roundclose',
                    'roundclosefill',
                    'roundcheck',
                    'roundcheckfill',
                    'global',
                    'mail',
                    'punch',
                    'exit',
                    'upload',
                    'read',
                    'file',
                    'link',
                    'full',
                    'group',
                    'friend',
                    'profile',
                    'addressbook',
                    'calendar',
                    'text',
                    'copy',
                    'share',
                    'wifi',
                    'vipcard',
                    'weibo',
                    'remind',
                    'refresh',
                    'filter',
                    'settings',
                    'scan',
                    'qrcode',
                    'cascades',
                    'apps',
                    'sort',
                    'searchlist',
                    'search',
                    'edit'
                ]
            }
        },
        computed: {
            list(){
                // 通过过滤器筛选对应内容
                return this.iconList.filter((item) => {
                    return item.indexOf(this.keyword) !== -1;
                })
            }
        }
    }
</script>
<style scope>
    .icon {
        width: 100%;
        height: 100%;
        background: #fff;
        border-radius: 5px;
        padding: 20px;
        box-sizing: border-box;
        border: 1px solid rgb(214, 213, 213);
        overflow-y:scroll;
    }

    .example-p {
        height: 45px;
        display: flex;
        align-items: center;
    }

    .search-box {
        text-align: center;
        margin-top: 10px;
    }

    .search {
        width: 300px;
    }

    ul,
    li {
        list-style: none;
    }

    .icon-li {
        display: inline-block;
        padding: 10px;
        width: 120px;
        height: 120px;
    }

    .icon-li-content {
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .icon-li-content i {
        font-size: 36px;
        color: #606266;
    }

    .icon-li-content span {
        margin-top: 10px;
        color: #787878;
    }
</style>