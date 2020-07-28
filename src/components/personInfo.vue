<template>
  <div class="homeBox">
    <navigation class="navBox"></navigation>
    <div class="mainBox">
      <div>
      <img src="../assets/select.png"></div>
      <Card style="width:60%" bordered="false" padding="40">
        <div style="text-align:center">
          <h3>个人信息</h3>
          <Form :model="userInfo" label-position="left" :label-width="80">
            <FormItem label="编号">
              {{userInfo.id}}
            </FormItem>
            <FormItem label="姓名">
             {{userInfo.name}}
            </FormItem>
            <FormItem label="性别">
              {{userInfo.sex}}
            </FormItem>
            <FormItem label="电话">
              {{userInfo.tel}}
            </FormItem>
            <FormItem label="邮箱">
              {{userInfo.email}}
            </FormItem>
          </Form>
        </div>
      </Card>
      <div>
      <router-link to="/bookSearching" tag="Button">返回</router-link></div>
    </div>
  </div>
</template>

<script>
import navigation from "./Navigation";

export default {
  name: "personInfo",
  components: {
    navigation
  },
  data(){
    return {
      userInfo: {
        id:"0101",
        name:"Cl",
        sex:"女",
        tel:"1234567890",
        email:"281922222@qq.com"
      }
    }
  }
};
</script>

<style scoped>
.homeBox {
  height: 100%;
  width: 100%;
}
.navBox {
  height: 11%;
}
.mainBox {
  margin: 5% 10%;
  width: 80%;
  min-height: 66%;
  background-color: white;
  display: flex;
}
</style>
