<template>
  <div id="antVG2">
    <div>
      <h1 style="color: white">{{title}}</h1>
    </div>
    <span>
      <div id="c1"></div>
      <div id="mountNode"></div>
    </span>
  </div>
</template>
<script>
import G2 from "@antv/g2";
export default {
  name: "antVG2",
  data() {
    return {
      title: "地区货品跟进看板",
      basicColumnChartProp: {
        data: [
          { genre: "Sports", sold: 275 },
          { genre: "Strategy", sold: 115 },
          { genre: "Action", sold: 120 },
          { genre: "Shooter", sold: 350 },
          { genre: "Other", sold: 150 }
        ],
        container: "c1", //图表所绑定的div id
        width: 600,
        height: 300
      },
      basicBarChartProp: {
        container: "mountNode", //图表所绑定的div id
        width: 500,
        height: 300,
        data: [
          {
            country: "巴西",
            population: 18203
          },
          {
            country: "印尼",
            population: 23489
          },
          {
            country: "美国",
            population: 29034
          },
          {
            country: "印度",
            population: 104970
          },
          {
            country: "中国",
            population: 131744
          }
        ]
      }
    };
  },
  methods: {
    test: function() {
      const data = this.basicColumnChartProp.data;
      // Step 1: 创建 Chart 对象
      const chart = new G2.Chart({
        container: this.basicColumnChartProp.container, // 指定图表容器 ID
        width: this.basicColumnChartProp.width, // 指定图表宽度
        height: this.basicColumnChartProp.height // 指定图表高度
      });
      // Step 2: 载入数据源
      chart.source(data);
      // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      chart
        .interval()
        .position("genre*sold")
        .color("genre");
      // Step 4: 渲染图表
      chart.render();
    },
    basicBarChart: function() {
      let data = this.basicBarChartProp.data;
      let chart = new G2.Chart({
        container: this.basicBarChartProp.container,
        width: this.basicBarChartProp.width,
        height: this.basicBarChartProp.height
      });
      chart.source(data);
      chart.axis("country", {
        label: {
          offset: 12
        }
      });
      chart.coord().transpose();
      chart.interval().position("country*population");
      chart.render();
    }
  }, //在挂载时调用两个函数
  mounted() {
    this.test();
    this.basicBarChart();
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#000000");
  },
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  }
};
</script>

<style lang="scss" scoped>
#antVG2 {
  width: 100%;
  height: 100%;
  background: #000;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 0 20px #ccc;
}
</style>