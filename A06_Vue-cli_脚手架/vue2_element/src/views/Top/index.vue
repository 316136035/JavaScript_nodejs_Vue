<template>
  <div class="top">
    <!-- 头部-顶部 -->
    <div class="tp-top">
      <!--响应式布局 -->
      <el-row :gutter="50">
        <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
          <!-- 头部左边 -->
          <Left></Left>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
          <!-- 头部右边 -->
          <Right></Right>
        </el-col>
      </el-row>
    </div>
    <!-- 头部-底部 -->
    <div class="top-bottom">
      <CarouselVue></CarouselVue>
    </div>
  </div>
</template>

<script>
// 引入组件
import Left from "./left.vue";
import Right from "./right.vue";
import CarouselVue from "./carousel.vue";
export default {
  // 注册组件
  components: {
    Left: Left,
    Right: Right,
    CarouselVue: CarouselVue,
  },
  data() {
    return {};
  },
};
</script>

<style>

</style>

