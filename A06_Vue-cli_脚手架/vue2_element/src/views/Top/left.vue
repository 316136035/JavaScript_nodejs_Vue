<template>
  
        <!-- Breadcrumb 面包屑 -->
  <el-breadcrumb  class="float-left" >
    <!-- v-for="item in paths" :key="item.sku" 遍数组
      @click.native.prevent="to(item)" 绑定组件本身的根元素上的原生 DOM 事件
      -->
    <el-breadcrumb-item
      v-for="item in paths"
      :key="item.sku"
      @click.native.prevent="to(item)"
      >{{ item.meta.title }}</el-breadcrumb-item
    >
  </el-breadcrumb>



</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      paths: [],
    };
  },
  //函数
  methods: {
    //绑定事件（判断要跳转的路径是否和本路径相同，如果不相同则跳转）
    to(item) {
      if (item.path !== this.$route.path) {
        this.$router.push(item.path);
      }
    },
    //判断是否是首页 （防止出现首页》首页）
    ishome(matched) {
      console.log(this.$route.path);
      if (matched.length && matched[1].path === "/home") {
        this.paths = [matched[0]];
      }
    },
  },
  //监视
  watch: {
    //监视路由发生变化就执行
    $route(to, from) {
      //赋值（to 要去那个路由，from来自那个路由）
      this.paths = to.matched;
      //判断是否是首页 （防止出现首页》首页）
      this.ishome(to.matched);
    },
  },
  //挂载
  mounted() {
    //matched数组(记录了路由的数据)
     console.log("matched:",this.$route.matched);
    //赋值
    this.paths = this.$route.matched;
    //判断是否是首页 （防止出现首页》首页）
    this.ishome(this.$route.matched);
  },
};
</script>

<style>

</style>