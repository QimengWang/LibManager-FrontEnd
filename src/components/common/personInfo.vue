<template>
  <div class="homeBox">
    <navigation class="navBox"></navigation>
    <div class="mainBox">
      <div class="mainContent">
        <div style="display: flex;flex-direction: column">
          <img
            src="../../assets/info.jpg"
            width="200"
            height="200"
            style="border-radius: 50%"
          />
        </div>
        <div class="card" >
          <Card >
            <p slot="title" style="font-size: large">
              <Icon type="md-person" />
              个人信息
            </p>
            <div>
              <Form :model="userInfo" :label-width="120" class="fontsize" >
                <FormItem label="编号">
                  <span style="font-size: 15px">{{ userInfo.id }}</span>
                </FormItem>
                <FormItem label="姓名">
                  <span style="font-size: 15px">{{ userInfo.name }}</span>
                </FormItem>
                <FormItem label="性别">
                  <span style="font-size: 15px">{{ userInfo.sex }}</span>
                </FormItem>
                <FormItem label="电话">
                  <span style="font-size: 15px">{{ userInfo.tel }}</span>
                  <Button
                    style="margin-left: 15px"
                    shape="circle"
                    type="primary"
                    icon="ios-create-outline"
                    @click="telChange"
                  ></Button>
                </FormItem>
                <FormItem label="邮箱">
                  <span style="font-size: 15px">{{ userInfo.email }}</span>
                  <Button
                    style="margin-left: 15px"
                    shape="circle"
                    type="primary"
                    icon="ios-create-outline"
                    @click="emailChange"
                  ></Button>
                </FormItem>
              </Form>
            </div>
          </Card>
        </div>
        <Modal v-model="modelTel" title="新电话号码">
          <Form>
            <FormItem>
              <Input v-model="newTel" />
            </FormItem>
          </Form>
          <div slot="footer">
            <Button type="primary" size="large" long @click="telChanged">提交</Button>
          </div>
        </Modal>
        <Modal v-model="modelEml" title="新邮箱地址">
          <Form>
            <FormItem>
              <Input v-model="newEmail" />
            </FormItem>
          </Form>
          <div slot="footer">
            <Button type="primary" size="large" long @click="emlChanged">提交</Button>
          </div>
        </Modal>
        <div class="returnBtn">
          <Button type="primary" shape="circle" to="/bookSearching">
            <Icon type="ios-undo" />
            返回主界面
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navigation from "./Navigation";
import { getUserInfo, changeTel, changeEmail } from "../../api/api";

export default {
  name: "personInfo",
  components: {
    navigation
  },
  data() {
    return {
      userInfo: {},
      modelTel: false,
      modelEml: false,
      newTel: "",
      newEmail: ""
    };
  },
  methods: {
    telChange() {
      this.modelTel = true;
    },
    emailChange() {
      this.modelEml = true;
    },
    async telChanged() {
      let flag = (await changeTel(this.$store.state.userId,this.newTel)).data;
      if (flag.res === 0) {
        this.$Notice.success({
          title: flag.msg,
          duration: 2
        });
        this.modelTel = false;
        location.reload();
      } else {
        this.$Notice.error({
          title: flag.msg,
          duration: 2
        });
      }
    },
    async emlChanged() {
      let flag = (await changeEmail(this.$store.state.userId,this.newEmail)).data;
      if (flag.res === 0) {
        this.$Notice.success({
          title: flag.msg,
          duration: 2
        });
        this.modelEml = false;
        location.reload();
      } else {
        this.$Notice.error({
          title: flag.msg,
          duration: 2
        });
      }
    },
    getInfo: async function(){
      let flag = (await getUserInfo(this.$store.state.userId)).data;
      this.userInfo = flag;
    }
  },
  mounted() {
    this.getInfo();
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
}
.mainContent {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.fontsize /deep/ .ivu-form-item-label {
  font-size: 15px;
}
.card {
  width: 55%;
  margin-top: 4%;
}
.returnBtn {
  margin-bottom: -26%;
  margin-right: 3%;
}
</style>
