<template>
  <div class="clear-both">
    <div class="title float-left">
      <li>
        <ul>
            <!-- router-link路由路径 to="/Front" 切换到哪个页面  可以写链接也可以写对象{path:'/Front' name:'Front'}-->
          <!-- replace属性它不会将新的路由记录添加到浏览器的历史记录栈中，相反，replace属性会触发router.replace()方法而不是router.push()方法来执行页面跳转。 -->
          <router-link to="/frontpage/frontpage_brand">品牌</router-link>
        </ul>
        <ul>
           <!-- router-link路由路径 to="/Front" 切换到哪个页面  可以写链接也可以写对象{path:'/Front' name:'Front'}-->
          <!-- replace属性它不会将新的路由记录添加到浏览器的历史记录栈中，相反，replace属性会触发router.replace()方法而不是router.push()方法来执行页面跳转。 -->
          <router-link to="/frontpage/frontPage_introduction">简介</router-link>
        </ul>
      </li>
    </div>
    <!-- 路由视图 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "FrontPage",
  components: {},
  mounted() {
    console.log("一级路由(首页)组件加载完成");
  },
  beforeDestroy() {
    console.log("一级路由(首页)组件销毁完成");
  },
};
</script>

<style scoped>
.title {
  width: 100px;
  height: 800px;

  background-color: brown;
}

.Front_page {
  background-color: rgb(4, 187, 92);
  /* 居中 */
  margin: 0 auto;

}
</style>