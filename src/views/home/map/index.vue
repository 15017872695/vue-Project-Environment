<template>
    <div id="mapComponent">
        
    </div>
</template>

<script>
import MapLoader from '@/assets/AMap/index.js'
export default {
    name:'mapComponent',
    data () {
        return {
            map: null,
            thisPosition: {
                location: '',
                lng: '',
                lat: ''
            },
        }
    },
    mounted: function () {
        this.init()
    },
    methods: {
        init: function () {
            let that = this;
            MapLoader().then(AMap => {
                const map = new AMap.Map('mapComponent', {
                    center: [116.397428,39.90923],//需求的城市的经度和 纬度
                    resizeEnable: true,//自适应大小
                    zoom: 10,//地图缩放级别
                    viewMode: '2D',  //设置地图模式
                    // lang:'en',  //设置地图文字为英文
                })
                AMap.plugin(['AMap.ToolBar', 'AMap.Scale','AMap.Geolocation'], function () {
                    let getlocation = new AMap.Geolocation({
                        timeout:6000,//设置定位超时时间
                        GeolocationFirst:true,//是否使用高精度定位,默认:true
                        maximumAge:0,//定位结果缓存0毫秒，默认:0
                    })
                    map.addControl(new AMap.ToolBar()) //添加工具条插件
                    map.addControl(new AMap.Scale())
                    map.addControl(getlocation)//把定位插件加入地图实例
                    getlocation.getCurrentPosition()//获取当前位置
                    console.log(getlocation.getCurrentPosition())
                })
            })
        },
    }
}
</script>

<style scoped>
    #mapComponent{
        width: 100%;
        height: 100%;
    }
    
</style>