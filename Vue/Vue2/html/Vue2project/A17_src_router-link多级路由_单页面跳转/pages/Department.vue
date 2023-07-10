<template>
  <div>
    <ul class="nav nav-tabs">
      <li>
         <!-- 使用路由实现当个页面跳转 -->
        <router-link class="list-group-item" active-class="active" to="/department/departmentChildren1"
          >部门管理</router-link
        >
      </li>
      <li>
         <!-- 使用路由实现当个页面跳转显示区(注意要带着父路径) -->
        <router-link class="list-group-item"  active-class="active" to="/department/departmentChildren2"
          >人员管理</router-link
        >
      </li>
       <hr/>
    
    </ul>
   <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: "Department",
  //组件挂载完毕
  mounted() {
    console.log(
      "Department部门管理组件挂载完毕..",
      this,
      "router代表整个vue路由器，route代表单前路由"
    );
  },
  //组件即将被销毁
  beforeDestroy() {
    console.log("Department部门管理组件即将被销毁了..");
  },
};
</script>


<style>
</style>