<template>
   <div class="nav-menu">
    <!--   v-for="item in NavMenuLists" :key="item.iconUrl" 导航菜单遍历
          :item="item" 传入item对象 -->
    <IndexItem  v-for="item in NavMenuLists" :key="item.iconUrl" :item="item" ></IndexItem>
  </div>
</template>

<script>
import IndexItem from "./indexItem.vue"; 
export default {
  name: "Index",
  components: {
    IndexItem,
  },
  data() {
    return {
      // 导航菜单数据
      NavMenuLists: [
        { index: "/home", title: "主页", iconUrl: "el-icon-s-home" },
        { index: "/stats", title: "信息管理", iconUrl: "el-icon-tableware" },
        {
          index: "/user",
          title: "用户管理",
          iconUrl: "el-icon-user",
          children: [
            { index: "/user/role", title: "用户角色", iconUrl: "el-icon-user" },
            {index: "/user/statistics",title: "用户统计",iconUrl: "el-icon-user",
            },
          ],
        },
        {
          index: "/invoiceManage",
          title: "发票管理",
          iconUrl: "el-icon-tickets",
          children: [
            { index: "/invoiceManage/issue", title: "发票开具", iconUrl: "el-icon-tickets" },
            {index: "/invoiceManage/inquiry",title: "发票查询",iconUrl: "el-icon-tickets",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>