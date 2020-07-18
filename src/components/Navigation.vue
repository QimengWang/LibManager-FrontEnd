<template>
  <div class="navBox">
    <span style="margin-left: 1.7%; font-weight: bold; font-size: 1.15rem">
      图 书 馆 管 理 系 统
    </span>
    <div class="infoBox">
      <span>{{ name }}, 欢迎！</span>
      <span @click="loginOut">退出</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      name: "王琦梦"
    };
  },
  methods: {
    loginOut() {
      alert("确定退出？");
    }
  }
};
</script>

<style scoped>
.navBox {
  height: 100%;
  background-color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

span {
  color: white;
  font-size: 0.95rem;
}

.infoBox {
  width: 13%;
  height: 100%;
  margin-right: 1.7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/*span:hover {*/
/*  color: lightgrey;*/
/*}*/
</style>
