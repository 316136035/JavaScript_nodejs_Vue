<template>
  <div>
   <div>
    <li>
      <ul>
        <!-- 品牌 -->
        <router-link to="/front_page/brand">品牌</router-link>
      </ul>
      <ul>
        <!-- 简介 -->
        <router-link to="/front_page/introduction">简介</router-link>
      </ul>
    </li>
   </div>
     <div class="view">

      <router-view>************</router-view>
     </div>
      <!-- 路由视图 -->
    
    
  </div>
</template>

<script>
export default {
  name: "front_page",
  components: {

  },
  mounted() {
    console.log("首页组件加载完成");
  },
  beforeDestroy() {
    console.log("首页组件销毁完成");
  },
};
</script>

<style scoped>

  ul{
    width: 40px;
    height: 40px;
    background-color: brown;

  }
  .view{
    width: 1200px;
    height: 1000px;
    background-color: blue;
  }
</style>./Front_page.vue