<template>
  <div class="mainBox">
    <div class="stepBox">
      <Steps :current="step" style="width: 70%; margin: 2% auto">
        <Step title="选择座位"></Step>
        <Step title="确定时间"></Step>
        <Step title="完成预约"></Step>
      </Steps>
    </div>
    <select-seat v-if="step === 0" @nextStep="next"></select-seat>
    <confirm-time v-if="step === 1" @finalStep="next"></confirm-time>
    <complete-order v-if="step === 2"></complete-order>
  </div>
</template>

<script>
import selectSeat from "./selectSeat";
import confirmTime from "./confirmTime";
import completeOrder from "./completeOrder";
export default {
  name: "seatOrdering",
  components: {
    completeOrder,
    confirmTime,
    selectSeat
  },
  data() {
    return {
      step: 0
    };
  },
  methods: {
    next(s) {
      this.step = s;
    }
  }
};
</script>

<style scoped>
.mainBox {
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
}

.stepBox {
  width: 100%;
}
</style>
