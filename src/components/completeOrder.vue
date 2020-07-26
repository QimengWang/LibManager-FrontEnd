<template>
  <div class="mainBox">
    <span>您选择了： {{ selection + 1 }} 号座位</span>
    <span>预约时间为：明天 {{ time }}</span>
    <div>
      <Button type="primary" @click="previous" style="float: left"
        >上一步</Button
      >
      <Button type="primary" @click="confirm" style="float: right"
        >确认预约</Button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "completeOrder",
  data() {
    return {
      selection: this.$parent.selectedSeat,
      time: this.$parent.selectedTime
    };
  },
  methods: {
    previous() {
      this.$emit("nextStep", 1);
    },
    confirm() {
      this.$emit("nextStep", 3);
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
}
</style>
