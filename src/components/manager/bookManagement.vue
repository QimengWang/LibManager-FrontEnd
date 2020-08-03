<template>
  <div class="mainBox">
    <div class="title">
      <Icon type="ios-pulse" size="23" />
      <h3>所有书籍</h3>
    </div>
    <div class="book_table">
      <Table max-height="400" :columns="columns1" :data="data1">
        <template slot-scope="{ row }" slot="action">
          <Button type="primary" size="small" @click="edit(row)"
            >修改数目</Button
          >
        </template>
      </Table>
    </div>
  </div>
</template>

<script>
import { getTotalbook } from "../../api/api";

export default {
  name: "bookManagement",
  data() {
    return {
      columns1: [
        {
          title: "编号",
          key: "BID",
          fixed: "left",
          width: 120,
          align: "center"
        },
        {
          title: "ISBN",
          key: "BISBN",
          width: 100,
          tooltip: true,
          align: "center"
        },
        {
          title: "书名",
          key: "BNAME",
          width: 120,
          align: "center"
        },
        {
          title: "作者",
          key: "BAUTHOR",
          width: 100,
          align: "center"
        },
        {
          title: "出版社",
          key: "BPRESS",
          // width: 120,
          tooltip: true,
          align: "center"
        },
        {
          title: "出版年月",
          key: "BPRYM",
          width: 90,
          align: "center"
        },
        {
          title: "馆藏数",
          key: "BNUM",
          align: "center",
          width: 75
        },
        {
          title: "已借数",
          key: "BREM",
          align: "center",
          width: 75
        },
        {
          title: "操作",
          slot: "action",
          align: "center",
          fixed: "right",
          width: 100
        }
      ],
      data1: [{}]
    };
  },
  methods: {
    async listAllBooks() {
      let flag = (await getTotalbook()).data;
      this.data1 = flag.data;
    }
  },
  mounted() {
    this.listAllBooks();
  }
};
</script>

<style scoped>
.mainBox {
  flex-direction: column;
}
.title {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
.book_table {
  width: 100%;
  margin-top: 20px;
  text-align: center;
}
</style>
