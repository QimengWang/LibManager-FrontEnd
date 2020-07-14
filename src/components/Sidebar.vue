<template>
  <div>
    <Menu active-name="1" theme="light" width="auto">
      <router-link to="/test">
        <MenuItem name="1">
          <Icon type="ios-navigate"></Icon>
          今日推荐
        </MenuItem>
      </router-link>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-keypad"></Icon>
          借阅管理
        </template>
        <MenuItem name="2-1">我的借阅</MenuItem>
        <MenuItem name="2-2">我的归还</MenuItem>
      </Submenu>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-analytics"></Icon>
          预约管理
        </template>
        <MenuItem name="3-1">在线预约</MenuItem>
        <MenuItem name="3-2">我的预约</MenuItem>
      </Submenu>
      <Submenu name="4">
        <template slot="title">
          <Icon type="ios-paper"></Icon>
          数据统计
        </template>
        <MenuItem name="4-1">借阅统计</MenuItem>
        <MenuItem name="4-2">预约统计</MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>
