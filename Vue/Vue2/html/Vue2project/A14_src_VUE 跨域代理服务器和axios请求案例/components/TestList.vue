<template>
  <div>
    <!-- 显示请求后返回的参数 -->
    <div v-show="show.list.length">
      <table>
        <tr>
          <th>sku</th>
          <th>m</th>
          <th>op</th>
          <th>p</th>
        </tr>
        <tr v-for="item in show.list" :key="item.id">
          <th>{{ item.id }}</th>
          <th>{{ item.m }}</th>
          <th>{{ item.op }}</th>
          <th>{{ item.p }}</th>
        </tr>
      </table>
    </div>
    <!-- 显示欢迎词-->
    <div v-show="show.isFirst">欢迎来到淘神价...</div>
    <!-- 显示加载中-->
    <div v-show="show.isLoading">加载中...</div>
    <!-- 显示错误信息-->
    <div v-show="show.isFirst">{{ show.errMsg }}</div>
  </div>
</template>

<script>
export default {
  name: "testList",
  data() {
    return {
      show: { isFirst: true, isLoading: false, errMsg: "", list:[] },
    };
  },
  methods: {
    getlist(params) {
    //this.show=params 这样会覆盖整个对象
    //这样只会覆盖有的参数 （保留原有的参数）
    this.show={...this.show,...params}
      console.log(params.isFirst);
    },
  },
  mounted() {
    //给全局事件总线添加一个方法（方法名，回调参数）
    this.$bus.$on("getJdList", this.getlist);
  },
  //销毁前
  beforeDestroy() {
    //销毁前把全局事件总线方法关闭
    this.$bus.$off("getJdList");
  },
};
</script>

<style scoped>
th {
  width: 150px;
}
</style>