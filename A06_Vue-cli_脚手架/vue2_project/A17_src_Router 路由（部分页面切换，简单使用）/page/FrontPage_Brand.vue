<template>
  <div class="brand">
    <div>二级路由(品牌)</div>
    <div>
      淘神价通常是指网络平台上出现的极具性价比、折扣力度大或低于市场常规价格的品牌商品。这些品牌并没有统一的标识与名称，因为“淘神价”并非指代某个特定品牌，而是用来形容优惠幅度很大的商品。从您提供的信息中可以看到多个品牌在不同时间点出现了“淘神价”，
    </div>
      <!-- router-link路由路径 to="/Front" 切换到哪个页面  可以写链接也可以写对象{path:'/Front' name:'Front'}-->
          <!-- replace属性它不会将新的路由记录添加到浏览器的历史记录栈中，相反，replace属性会触发router.replace()方法而不是router.push()方法来执行页面跳转。 -->
    <router-link to="/frontpage/frontPage_brand/frontPage_brand_list">例如</router-link>

    <div>
      <!--路由视图 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "brand",
  mounted() {
    console.log("二级路由(品牌)组件加载完成");
  },
  beforeDestroy() {
    console.log("二级路由(品牌)组件销毁完成");
  },
};
</script>

<style>
.brand {
  height: 100px;
}
</style>