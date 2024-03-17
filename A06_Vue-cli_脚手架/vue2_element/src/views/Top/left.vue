<template>
  <el-breadcrumb separator-class="el-icon-arrow-right bg-purple-left">
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
  methods: {

    to(item) {
      console.log(item.path);
      if (item.path !== this.$route.path) {
        this.$router.push(item.path);
      }
    },

    ishome(matched) {
      console.log("isindex:", matched);
      console.log(this.$route.path);
      if (matched.length && matched[1].path === "/home") {
        this.paths = [matched[0]];


      }
    },
  },
  //监视
  watch: {
    //路由发生变化就执行
    $route(to, from) {
      // console.log("to:", to, "", "from:", from);
      //赋值
      this.paths = to.matched;
      

      this.ishome(to.matched);


    },
  },
  mounted() {
    //matched数组(记录了路由的数据)
    // console.log(this.$route.matched);
    //赋值
    this.paths = this.$route.matched;

    this.ishome(this.$route.matched);
  },
};
</script>

<style>
.el-breadcrumb {
  margin-top: 34px;
  margin-bottom: 40px;
  font-size: 22px;
}
</style>