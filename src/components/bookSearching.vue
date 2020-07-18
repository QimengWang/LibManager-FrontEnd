<template>
  <div class="mainBox">
    <Input suffix="ios-search" v-model="value" placeholder="Enter something..." style="width: 40%" />
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      value: ''
    };
  }
};
</script>

<style scoped>
.mainBox {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
