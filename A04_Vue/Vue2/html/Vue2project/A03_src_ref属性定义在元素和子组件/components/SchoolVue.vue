
<template>
  <!-- 定义模板 -->
  <div class="school">
    <div v-text="name"></div>
    <div v-text="address"></div>
    <!-- 定义red属性 -->
    <button @click="click" ref="id">通过ref属性获取元素</button>
  </div>
</template>

<script>
//  定义一个组件
export default {
  // 组件名称
  name: "SchoolVue",
  data() {
    return {
      name: "广东师范大学",
      address: "广东省广州市黄埔区龙湖街道汤村",
    };
  },
  methods: {
    click() {
      // 通过ref属性获取元素
      const element = this.$refs.id;
      console.log(element);
    },
  },
};
</script>

<style>
/* 样式在这里写 */
</style>


