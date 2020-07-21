<template>
  <div>
    <h2>hhh</h2>
    <Button type="primary" @click="previous">上一步</Button>
    <Button type="primary" @click="next">下一步</Button>
  </div>
</template>

<script>
export default {
  name: "confirmTime",
  data() {
    return {};
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

<style scoped></style>
