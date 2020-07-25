<template>
  <div class="mainBox">
    <div class="selectBox">
      <span
        style="display: inline-block; font-size: 1rem; font-weight: bold; float: left"
      >
        请选择：
      </span>
      <Cascader
        :data="data"
        v-model="area"
        trigger="hover"
        @on-change="selectArea"
        style="width: 30%; display: inline-block; float: left"
      ></Cascader>
      <br>
      <br>
    </div>
    <div class="seatBox">
      <table>
        <thead>
          <tr>
            <th style="width: 15%">行\列</th>
            <th v-for="c in col" :key="c">{{ c }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in row" :key="r">
            <td>{{ r }}</td>
            <td v-for="c in col" :key="c">
              <img
                v-if="isAvailable[location(r, c)] === true"
                src="../assets/available.png"
                @click="selectSeat(r, c)"
                alt="pic"
              />
              <img
                v-else-if="isAvailable[location(r, c)] === false"
                src="../assets/unavailable.png"
                alt="pic"
              />
              <img v-else src="../assets/select.png" alt="pic" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="remainBox">
      <h3 style="display: inline-block; float: left">剩余空位：{{ remain }}</h3>
      <Button
        type="primary"
        style="display: inline-block; float: right"
        @click="next"
        :disabled="!isSelected"
      >
        下一步
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "selectSeat",
  props: {
    isSelectedSeat: Boolean,
    selectedSeat: Number
  },
  data() {
    return {
      isSelected: this.isSelectedSeat, // 是否进行了选座
      selection: this.selectedSeat, // 选择的座位号
      row: [1, 2, 3, 4],
      col: [1, 2, 3, 4, 5],
      isAvailable: [
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        false,
        true,
        true,
        false,
        true
      ],
      area: ["firstFloor", "A"],
      data: [
        {
          value: "firstFloor",
          label: "一楼",
          children: [
            {
              value: "A",
              label: "A区"
            },
            {
              value: "B",
              label: "B区"
            }
          ]
        },
        {
          value: "secondFloor",
          label: "二楼",
          children: [
            {
              value: "A",
              label: "A区"
            },
            {
              value: "B",
              label: "B区"
            },
            {
              value: "C",
              label: "C区"
            }
          ]
        }
      ]
    };
  },
  methods: {
    selectArea(value) {
      console.log(value);
    },
    selectSeat(r, c) {
      const d = (r - 1) * this.col.length + c - 1;
      let resource = document.getElementsByTagName("img")[d];
      // console.log(resource.src);
      if (!this.isSelected) {
        // 未选择过座位
        this.selection = d;
        resource.src = require("../assets/select.png");
        this.isSelected = true; // 已经选座
      } else if (this.selection === d) {
        // 取消已选择的座位
        resource.src = require("../assets/available.png");
        this.isSelected = false; // 未选座
        this.selection = -1;
      } else {
        alert("不可重复选座，请取消后已选择座位后再次选座！");
      }
    },
    location(r, c) {
      return (r - 1) * this.col.length + c - 1; // 找到已经被预定的座位在isAvailable数组中的位置
    },
    next() {
      this.$emit("nextStep", 1);
    }
  },
  computed: {
    remain() {
      let n = 0;
      for (let i of this.isAvailable) {
        if (i === true) {
          n++;
        }
      }
      return n;
    }
  },
  mounted() {
    if(this.$parent.selectedSeat !== -1) {
      const d = this.$parent.selectedSeat;
      document.getElementsByTagName("img")[d].src = require("../assets/select.png");
    }
  }
};
</script>

<style scoped>
.mainBox {
  height: 100%;
  width: 100%;
  /*flex-direction: column;*/
  /*align-items: flex-start;*/
}

.selectBox {
  width: 100%;
  margin: 3% 0;
}

.seatBox {
  width: 100%;
}

.remainBox {
  width: 100%;
}

table {
  width: 35%;
  margin: 2% auto;
}

img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
