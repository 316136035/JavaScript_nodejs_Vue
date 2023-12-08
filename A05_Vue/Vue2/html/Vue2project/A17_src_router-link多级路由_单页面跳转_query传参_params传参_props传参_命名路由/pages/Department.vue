<template>
  <div>
    <ul >
      <li>
        
         <!-- 使用路由实现当个页面跳转 使用:to="{name:'departmentChildren1name'}必须在路由文件.路由中给路由明命名 replace关闭记录浏览器历史  -->
        <router-link replace class="list-group-item" active-class="active" :to="{name:'departmentChildren1name'} "  
          >部门管理</router-link
        >
      </li>
      <li>
         <!-- 使用路由实现当个页面跳转 使用:to="{name:'departmentChildren2name'}必须在路由文件.jd中给路由起名-->
        <router-link replace class="list-group-item"  active-class="active" :to="{name:'departmentChildren2name'}" 
          >人员管理</router-link
        >
      </li>
       <hr/>
       <li> <router-view></router-view></li>
    
    </ul>
   
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