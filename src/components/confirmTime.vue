<template>
  <div>
    <h2>hhh</h2>
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
    next() {
      this.$emit("finalStep", 2);
    }
  }
};
</script>

<style scoped></style>
