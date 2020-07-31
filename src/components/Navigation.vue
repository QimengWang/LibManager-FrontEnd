<template>
  <div class="navBox">
    <span style="margin-left: 1.7%; font-weight: bold; font-size: 1.15rem">
      自 习 阅 览 室 管 理 系 统
    </span>
    <div class="infoBox">
      <Dropdown @on-click="userClick">
        <a>
<!--          <span>{{ name }}</span>-->
          <span>{{$store.state.userStatus}}</span>
          <Icon type="ios-arrow-down" color="white" size="17"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem name="personInfo">个人信息</DropdownItem>
          <DropdownItem name="pwdChange">修改密码</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Modal v-model="modal" title="修改密码" @on-ok="pwdChange">
        <Form :model="form" label-position="left" :label-width="80">
          <FormItem label="原密码">
            <Input v-model="form.pwd" />
          </FormItem>
          <FormItem label="新密码">
            <Input v-model="form.pwdChanged" />
          </FormItem>
          <FormItem label="确认新密码">
            <Input v-model="form.pwdConfirm" />
          </FormItem>
        </Form>
      </Modal>
      <a>
        <Icon type="md-exit" color="white" size="17"/>
        <span @click="loginOut">退出</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      name: "王琦梦",
      modal: false,
      form: {
        pwd: "",
        pwdChanged: "",
        pwdConfirm: ""
      }
    };
  },
  methods: {
    loginOut() {
      // alert("确定退出？");
      window.open("http://localhost:8090", "_self");
    },
    userClick: function(name) {
      console.log(name);
      if (name === "personInfo") {
        this.$router.push("/personInfo");
      } else {
        this.modal = true;
      }
    },
    pwdChange(){
      console.log(this.form.pwd);
      console.log(this.form.pwdChanged);
      console.log(this.form.pwdConfirm);
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
