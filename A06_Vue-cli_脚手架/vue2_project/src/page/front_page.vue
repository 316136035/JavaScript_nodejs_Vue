<template>
  <div>
   <div>
    <li>
      <ul>
        <!-- 品牌 -->
        <router-link to="/front_page/Brand">品牌</router-link>
      </ul>
      <ul>
        <!-- 简介 -->
        <router-link to="/front_page/Introduction">简介</router-link>
      </ul>
    </li>
   </div>
    <div>
      <!-- 路由视图 -->
      <router-view>************</router-view>
    </div>
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

<style>
</style>