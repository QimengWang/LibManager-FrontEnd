<template>
  <div class="home">
    <img src=".././assets/lib.jpg" alt="Here is a image"/>
    <Card class="card">
      <div>
        <span class="loginSpan">登 录</span>
        <div class="contentBox">
          <span class="labelSpan" style="margin-top: 6%">账 号：</span>
          <Input class="inputBox" v-model="user.id" placeholder="请输入账号"/>
          <span class="labelSpan">密 码：</span>
          <Input class="inputBox" type="password" v-model="user.pwd" password placeholder="请输入密码" autocomplete='new-password'/>
          <RadioGroup class="radioBox" v-model="status">
            <Radio label="user">
              <span style="color: #333333">普通用户</span>
            </Radio>
            <Radio label="manager">
              <span style="color: #333333">管理员</span>
            </Radio>
          </RadioGroup>
          <Button class="btnBox" type="primary" long @click="login">
            <span>确 定</span>
          </Button>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        id: "",
        pwd: ""
      },
      status: "user"
    };
  },
  methods: {
    login() {
      // alert("功能暂未开发！");
      window.location.href = 'http://localhost:8080/home';
    }
  }
};
</script>

<style scoped lang="less">
.home {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
}

img {
  width: 100%;
  display: block;
  position: absolute;
  z-index: 0;
}

.card {
  width: 24%;
  top: 50%;
  left: 50%;
  transform: translate(65%, -50%);
  padding: 1%;
  background-color: rgba(255, 255, 255, 0.9);
}

span {
  font-size: 0.8rem;
  font-weight: bold;
}

.loginSpan {
  font-size: 1.5rem;
  color: #333333;
}

.labelSpan {
  float: left;
  font-size: 0.9rem;
  color: #333333;
  margin-bottom: 2%;
}

.contentBox {
  margin: 3%;
}

.inputBox {
  margin-bottom: 5%;
}

.btnBox {
  margin-top: 7%;
}

.radioBox {
  margin: 3% 0;
}
</style>
