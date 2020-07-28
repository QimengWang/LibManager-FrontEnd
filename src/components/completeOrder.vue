<template>
  <div class="mainBox">
    <span>
      您选择了：{{ area[0] }} 楼 {{ area[1] }} 区 {{ selection + 1 }} 号座位
    </span>
    <span>预约时间为：明天 {{ time }}</span>
    <div>
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
  data() {
    return {
      area: this.$parent.selectedArea,
      selection: this.$parent.selectedSeat,
      time: this.$parent.selectedTime
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
    }
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
</style>
