<template>
  <div class="mainBox">
    <div class="stepBox">
      <Steps :current="step" style="width: 70%; margin: 2% auto">
        <Step title="选择座位"></Step>
        <Step title="确定时间"></Step>
        <Step title="完成预约"></Step>
      </Steps>
    </div>
    <select-seat
      ref="seat"
      :is-selected-seat="isSelectedSeat"
      :selected-seat="selectedSeat"
      v-if="step === 0"
      @nextStep="next"
    ></select-seat>
    <confirm-time
      ref="time"
      :is-selected-time="isSelectedTime"
      :selected-time="selectedTime"
      v-if="step === 1"
      @nextStep="next"
    ></confirm-time>
    <complete-order v-if="step === 2" @nextStep="next"></complete-order>
    <div class="finalBox">
      <h2 v-if="step === 3">恭喜您已完成预约！</h2>
    </div>
  </div>
</template>

<script>
import selectSeat from "./selectSeat";
import confirmTime from "./confirmTime";
import completeOrder from "./completeOrder";
export default {
  name: "seatOrdering",
  data() {
    return {
      step: 0,
      selectedSeat: -1,
      selectedTime: [8, 22],
      isSelectedSeat: false,
      isSelectedTime: false,
      isConfirmed: false
    };
  },
  components: {
    completeOrder,
    confirmTime,
    selectSeat
  },
  methods: {
    next(val) {
      this.step = val;
      if (val === 1) {
        // 当在子组件“选择座位”中点击了“下一步”时
        this.selectedSeat = this.$refs.seat.selection;
        this.isSelectedSeat = true;
      }
      if (val === 0) {
        // 当在子组件“确定时间”中点击了“上一步”时
        console.log(this.selectedSeat);
        // document.getElementsByTagName("img")[this.selectedSeat].src = require("../assets/select.png");
      }
      if (val === 2) {
        // 当在子组件“确定时间”中点击了“下一步”时
        this.selecetdTime = [10, 18];
        console.log(this.selecetdTime);
      }
      if (val === 3) {
        // 用户提交了请求，此时可向后台发起请求
      }
    }
  }
};
</script>

<style scoped>
.mainBox {
  flex-direction: column;
}

.stepBox {
  width: 100%;
}

.finalBox {
  margin: auto 0;
}
</style>
