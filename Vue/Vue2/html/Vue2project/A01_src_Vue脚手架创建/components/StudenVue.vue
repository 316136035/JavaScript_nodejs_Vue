<template>

<div>
   <!-- 定义模板 -->
    <div v-text="name"></div>
    <div v-text="age"></div>
</div>
</template>


<script>
//  定义一个组件
export default {
   // 组件名称
  name: "StudenVue",
  data() {
    return {
        name :"心动",age:"30"
    }
  },
}
</script>

<style>
/* 样式在这里写 */
</style>