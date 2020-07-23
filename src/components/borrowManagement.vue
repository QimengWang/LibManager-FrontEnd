<template>
  <div class="mainBox">
    <div class="title">
      <Icon type="ios-pulse" size="23" />
      <h3>待归还</h3>
    </div>
    <div v-if="data.length === 0" style="margin-top: 10px">
      <Alert show-icon>
        <template slot="desc">您暂无待归还书籍，快去借阅吧！</template>
      </Alert>
    </div>
    <div v-else class="b_table">
      <Table
        :columns="borrowing"
        :data="data">
        <template slot-scope="{ row, index }" slot="action">
          <Button type="primary" size="small" style="margin-right: 5px" @click="giveBack(row,index)">还书</Button>
        </template>
      </Table>
    </div>
    <div class="title">
      <Icon type="ios-pulse" size="23" />
      <h3>已归还</h3>
    </div>
    <div v-if="data2.length === 0" style="margin-top: 10px">
      <Alert show-icon>
        <template slot="desc">您暂无已归还书籍</template>
      </Alert>
    </div>
    <div  v-else class="b_table">
      <Table :columns="returned" :data="data2"></Table>
    </div>
  </div>
</template>

<script>
export default {
  name: "borrowManagement",
  data: function() {
    return {
      borrowing: [
        {
          title: "ISBN号",
          key: "isbn",
          align: "center",
          tooltip: "50",
        },
        {
          title: "书名",
          key: "name",
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
          align: "center",
          tooltip: "50"
        },
        {
          title: " 借阅日期",
          key: "b_time",
          align: "center"
        },
        {
          title: "应还日期",
          key: "e_time",
          align: "center"
        },
        {
          title: '操作',
          slot: 'action',
          align: 'center'
        }
      ],
      returned: [
        {
          title: "ISBN号",
          key: "isbn",
          align: "center"
        },
        {
          title: "书名",
          key: "name",
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
          align: "center"
        },
        {
          title: " 借阅日期",
          key: "b_time",
          align: "center"
        },
        {
          title: "归还日期",
          key: "e_time",
          align: "center"
        }
      ],
      data: [
        {
          isbn: "978-7-5680-5950-3",
          name: "数据结构",
          author: "黄薇",
          press: "华中科技大学出版社",
          b_time: "2020.07.24",
          e_time: "2020.08.24"
        },
        {
          isbn: "978-7-5680-5950-3",
          name: "数据结构",
          author: "黄薇",
          press: "华中科技大学出版社",
          b_time: "2020.07.24",
          e_time: "2020.08.24"
        },
        {
          isbn: "978-7-5680-5950-3",
          name: "数据结构",
          author: "黄薇",
          press: "华中科技大学出版社",
          b_time: "2020.07.24",
          e_time: "2020.08.24"
        },
        {
          isbn: "978-7-5680-5950-3",
          name: "数据结构",
          author: "黄薇",
          press: "华中科技大学出版社",
          b_time: "2020.07.24",
          e_time: "2020.08.24"
        }
      ],
      data2:[
        // {
        //   isbn: "978-7-5680-5950-3",
        //   name: "数据结构",
        //   author: "黄薇",
        //   press: "华中科技大学出版社",
        //   b_time: "2020.07.24",
        //   e_time: "2020.07.30"
        // },
      ]
    };
  },
  methods: {
    giveBack(row,index){
      console.log(row.isbn);
      console.log(index)
      this.data.splice(index, 1);
      this.$Notice.success({
        title: '还书成功！',
      });
    }
  }
};
</script>

<style scoped>
.mainBox {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.title {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
.b_table {
  margin-top: 20px;
}
</style>
