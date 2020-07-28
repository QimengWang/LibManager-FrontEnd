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
      :selected-area="selectedArea"
      v-show="step === 0"
      @nextStep="next"
      @clear="reset"
    ></select-seat>
    <confirm-time
      ref="time"
      :is-selected-time="isSelectedTime"
      :selected-time="selectedTime"
      v-if="step === 1"
      @nextStep="next"
    ></confirm-time>
    <complete-order v-if="step === 2" @nextStep="next"></complete-order>
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
      selectedArea: [], // 选择的区域
      selectedSeat: -1, // 选择的座位号
      isSelectedSeat: false,
      selectedTime: [8, 22], // 选择的时间
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
        this.selectedArea = this.$refs.seat.area;
        console.log("选择的区域：" + this.selectedArea);
        console.log("选择的座位：" + this.selectedSeat);
      }
      if (val === 0) {
        // 当在子组件“确定时间”中点击了“上一步”时
        // console.log("选择的座位：" + this.$refs.seat.selection);
        // console.log("选择的区域：" + this.$refs.seat.area);
      }
      if (val === 2) {
        // 当在子组件“确定时间”中点击了“下一步”时
        this.selecetdTime = this.$refs.time.time;
        console.log("预约的时间为：" + this.selecetdTime);
      }
    },

    reset() {
      this.selectedSeat = -1;
      this.isSelectedSeat = false;
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
</style>
