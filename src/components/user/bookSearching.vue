<template>
  <div class="mainBox">
    <div class="search">
      <Select style="width:100px" v-model="type">
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
          v-model="bookValue"
          @on-search="search"
        />
      </div>
    </div>
    <div v-show="data1.length !== 0">
      <div class="book_table">
        <Table max-height="400" :columns="columns1" :data="data1">
          <template slot-scope="{ row }" slot="action">
            <Button
              type="primary"
              size="small"
              style="margin-right: 5px"
              @click="borrowBook(row)"
              >借阅</Button
            >
          </template>
        </Table>
      </div>
    </div>
  </div>
</template>

<script>
import { searchBook, bookBorrow } from "../../api/api";
export default {
  name: "Test",
  data() {
    return {
      type: "",
      bookValue: "",
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
          title: "编号",
          key: "id",
          tooltip: true,
          align: "center"
        },
        {
          title: "ISBN",
          key: "isbn",
          tooltip: true,
          align: "center"
        },
        {
          title: "书名",
          key: "name",
          // width: 120,
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
          tooltip: true,
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
        },
        {
          title: "操作",
          slot: "action",
          align: "center"
        }
      ],
      data1: [{}]
    };
  },
  methods: {
    search: async function() {
      console.log(this.bookValue);
      let flag = (await searchBook(this.type, this.bookValue)).data;
      if (flag.res === 0) {
        this.data1 = flag.data;
      }
      if (flag.res === 1) {
        this.$Notice.error({
          title: flag.msg,
          duration: 2
        });
      }
    },
    borrowBook: async function(row) {
      console.log(row.id);
      let flag = (await bookBorrow(this.$store.state.userId, row.id)).data
      console.log(flag.res);
      if (flag.res === 0) {
        this.$Notice.success({
          title: flag.msg,
          duration: 2
        });
      } else if (flag.res === 1){
        this.$Notice.error({
          title: flag.msg,
          duration: 2
        });
      } else {
        this.$Notice.error({
          title: flag.msg,
          duration: 2
        });
      }
    }
  }
};
</script>

<style scoped>
.mainBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.search {
  display: flex;
  flex-direction: row;
}
.book_table {
  margin-top: 3%;
  /*margin: 20px;*/
}
</style>
