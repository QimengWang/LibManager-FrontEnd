<template>
  <div class="mainBox">
    <Alert show-icon v-if="!isOrdered">
      <template slot="desc">您暂无已预约座位，快去预约吧！</template>
    </Alert>
    <div v-else>
      <div class="titleBox">
        <Icon type="ios-pulse" size="23" />
        <h3>我的预约</h3>
      </div>
      <Table :columns="col" :data="orderInfo">
        <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button type="primary" size="small" @click="remove(index)">
            Delete
          </Button>
        </template>
      </Table>
    </div>
  </div>
</template>

<script>
import { getOrders } from "../api/api";

export default {
  name: "myOrder",
  data() {
    return {
      col: [
        {
          title: "日期",
          key: "date"
        },
        {
          title: "开始时间",
          key: "start"
        },
        {
          title: "结束时间",
          key: "end"
        },
        {
          title: "楼号",
          key: "floor"
        },
        {
          title: "区号",
          key: "area"
        },
        {
          title: "座位号",
          key: "seat"
        },
        {
          title: "操作",
          slot: "action",
          align: "center"
        }
      ],
      isOrdered: true,
      orderInfo: []
    };
  },
  methods: {
    remove(index) {
      this.orderInfo.splice(index, 1);
    },
    async getOrders() {
      const id = this.$store.state.userId;
      const d = (await getOrders(id)).data;
      console.log(d);
      if (d.msg === 0) {
        this.orderInfo = d.data;
      }
    }
  },
  created() {
    this.getOrders();
  }
};
</script>

<style scoped>
.mainBox {
  flex-direction: column;
}

.titleBox {
  display: flex;
  flex-direction: row;
  margin-top: 3%;
  margin-bottom: 3%;
}
</style>
