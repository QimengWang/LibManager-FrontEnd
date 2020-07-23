<template>
  <div class="mainBox">
    <div class="search">
      <Select style="width:100px">
        <Option
          v-for="item in wordList"
          :value="item.value"
          :key="item.value"
          >{{ item.label }}</Option
        >
      </Select>
      <div style="margin-left: 20px">
        <Input
          search
          enter-button
          placeholder="请输入检索词"
          style="width: 300px"
          @on-search="btnClick"
        />
      </div>
    </div>
    <div v-show="data1.length !== 0">
      <div class="book_table">
        <Table
          border
          ref="selection"
          stripe
          max-height="400"
          :columns="columns1"
          :data="data1"
          @on-select="selectRow"
        ></Table>
      </div>
      <div>
        <Button type="primary" @click="btnClick2">借阅</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      value: "",
      wordList: [
        {
          value: "keyword",
          label: "关键字"
        },
        {
          value: "author",
          label: "作者"
        },
        {
          value: "isbn",
          label: "ISBN"
        }
      ],
      columns1: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "编号",
          key: "id",
          tooltip: "50",
          align: "center"
        },
        {
          title: "ISBN",
          key: "isbn",
          tooltip: "50",
          align: "center"
        },
        {
          title: "书名",
          key: "name",
          width: 120,
          align: "center"
        },
        {
          title: "作者",
          key: "author",
          align: "center"
        },
        {
          title: "出版社",
          key: "press",
          tooltip: "150",
          align: "center"
        },
        {
          title: "出版年月",
          key: "pry",
          align: "center"
        },
        {
          title: "馆藏数",
          key: "total",
          align: "center",
          width: 75
        },
        {
          title: "已借数",
          key: "num",
          align: "center",
          width: 75
        }
      ],
      data1: [
        {
          id: "001105001001",
          isbn: "978-7-5680-5950-3",
          name: "数据结构",
          author: "黄薇",
          press: "华中科技大学出版社",
          pry: "2020.1",
          total: 5,
          num: 0
        },
        {
          id: "001105001001",
          isbn: "978-7-5680-5950-3",
          name: "数据结构",
          author: "黄薇",
          press: "华中科技大学出版社",
          pry: "2020.1",
          total: 5,
          num: 0
        },
        {
          id: "001105001001",
          isbn: "978-7-5680-5950-3",
          name: "数据结构",
          author: "黄薇",
          press: "华中科技大学出版社",
          pry: "2020.1",
          total: 5,
          num: 0
        },
        {
          id: "001105001001",
          isbn: "978-7-5680-5950-3",
          name: "数据结构",
          author: "黄薇",
          press: "华中科技大学出版社",
          pry: "2020.1",
          total: 5,
          num: 0
        },
      ]
    };
  },
  methods: {
    btnClick() {
      console.log("btnClick");
    },
    btnClick2() {
      console.log("btnClick2");
    },
    selectRow() {
      console.log(this.$refs.selection.getSelection());
    }
  }
};
</script>

<style scoped>
.mainBox {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.search {
  display: flex;
  flex-direction: row;
}
.book_table {
  margin: 20px;
}
</style>
