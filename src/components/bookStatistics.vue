<template>
  <div class="mainBox">
    <div id="myChart" style="width:60%;height:400px;"></div>
    <div id="myChart2" style="width:60%;height:350px;"></div>
  </div>
</template>

<script>
export default {
  name: "bookStatistics",
  data: function() {
    return {
      types: [
        { value: 5, name: "经典" },
        { value: 3, name: "教材" },
        { value: 4, name: "辅导书" },
        { value: 8, name: "科幻" },
        { value: 10, name: "悬疑" }
      ]
    };
  },
  methods: {
    draw() {
      let myChart = this.echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        title: {
          text: "借书类别统计",
          left: "center"
        },
        tooltip: {
          trigger: 'item',
          formatter: "{b} {c}本<br/>{d}%"
        },
        series: [
          {
            name: "类别统计",
            type: "pie",
            radius: "45%",
            // roseType: "angle",
            center: ["50%", "40%"],
            data: this.types,
            label: {
              normal: {
                formatter: "{b} : {c}本 ({d}%)"
              }
            }
          }
        ]
      });
    },
    draw2() {
      let myChart2 = this.echarts.init(document.getElementById("myChart2"));
      myChart2.setOption({
        title: {
          text: "借书次数统计",
          left: "center"
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          name: "时间",
          type: "category",
          boundaryGap: false,
          data: ["2020-7-28", "2020-7-29", "2020-7-30", "2020-7-31"]
        },
        yAxis: {
          name: "本数",
          type: "value"
        },
        series: {
          type: "line",
          data: [1, 2, 3, 5]
        }
      });
    }
  },
  mounted() {
    this.draw();
    this.draw2();
  }
};
</script>

<style scoped>
.mainBox {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
