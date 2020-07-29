<template>
  <div class="mainBox">
    <span>
      您选择了：{{ area[0] }} 楼 {{ area[1] }} 区 {{ selection + 1 }} 号座位
    </span>
    <span>预约时间为：明天 {{ time }}</span>
    <div class="stepBox">
      <Button type="primary" @click="previous" style="float: left">
        上一步
      </Button>
      <Button type="primary" @click="confirm" style="float: right">
        确认预约
      </Button>
    </div>
  </div>
</template>

<script>
import { orderSeat } from "../api/api";

export default {
  name: "completeOrder",
  props: {
    selectedTime: Array
  },
  data() {
    return {
      area: this.$parent.selectedArea,
      selection: this.$parent.selectedSeat,
      time: this.selectedTime
    };
  },
  methods: {
    previous() {
      this.$emit("nextStep", 1);
    },
    async confirm() {
      console.log(await orderSeat());
      const d = (await orderSeat()).data;
      console.log(d);
      if (d.res === 0) {
        this.$Notice.success({
          title: d.msg,
          duration: 2
        });
      } else {
        this.$Notice.error({
          title: d.msg,
          duration: 2
        });
      }
    },
    change() {
      console.log(this.time);
      const val = this.time;
      const startH = Math.floor(val[0]);
      const startM = (val[0] - startH) * 60;
      let start = "";
      if (startM === 0) {
        start = startH + ":00";
      } else {
        start = startH + ":" + startM;
      }

      const endH = Math.floor(val[1]);
      const endM = (val[1] - endH) * 60;
      let end = "";
      if (endM === 0) {
        end = endH + ":00";
      } else {
        end = endH + ":" + endM;
      }

      this.time = start + "-" + end;
    }
  },
  mounted() {
    this.change();
  }
};
</script>

<style scoped>
.mainBox {
}

span {
  font-weight: bold;
  font-size: 1rem;
  display: block;
  margin-top: 3%;
}

.stepBox {
  margin-top: 3%;
}
</style>
