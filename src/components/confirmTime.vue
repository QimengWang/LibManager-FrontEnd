<template>
  <div class="mainBox">
    <span style="margin-top: 3%">您选择了： {{ selection + 1 }} 号座位</span>
    <div class="selectBox">
      <span>请选择预约时间：</span>
      <Slider v-model="time" range></Slider>
    </div>
    <div class="stepBox">
      <Button style="float: left" type="primary" @click="previous"
        >上一步</Button
      >
<!--      :disabled="!isSelected"-->
      <Button
        style="float: right"
        type="primary"
        @click="next"
      >
        下一步
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "confirmTime",
  props: {
    isSelectedTime: Boolean,
    selectedTime: Array
  },
  data() {
    return {
      selection: this.$parent.selectedSeat,
      time: this.selectedTime,
      isSelected: this.isSelectedTime
    };
  },
  methods: {
    previous() {
      this.$emit("nextStep", 0);
    },
    next() {
      this.$emit("nextStep", 2);
    }
  }
};
</script>

<style scoped>
.mainBox {
  flex-direction: column;
  align-items: flex-start;
}

span {
  font-weight: bold;
  font-size: 1rem;
  display: inline-block;
}

.selectBox {
  margin-top: 3%;
}

.stepBox {
  width: 100%;
  margin-top: 5%;
}
</style>
