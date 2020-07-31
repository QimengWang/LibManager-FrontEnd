<template>
  <div>
    <h2>过去的一年里，我一共去了{{num}}次自习室</h2>
    <h2>过去的一年里，我一共自习了{{hour}}小时{{minute}}分钟</h2>
  </div>
</template>

<script>
export default {
  name: "orderStatistics",
  data() {
    return {
      num: 98,
      hour: 38,
      minute: 30
    };
  }
};
</script>

<style scoped></style>
