<template>
  <div class="div">
    <h3>{{ title }}</h3>

    <!-- 定义一个插槽 -->
    <slot name="slot1">
      我是一个插槽slot1，当使用者没有传递具体结构时，我会出现</slot
    >
    <!-- 定义一个插槽 -->
    <slot name="slot2">
      我是一个插槽slot2，当使用者没有传递具体结构时，我会出现</slot
    >
  </div>
</template> 

<script>
export default {
  name: "category",
  props: ["title"],
};
</script>

<style scoped>
h3 {
  text-align: center;
  background-color: chocolate;
}
.div {
  width: 200px;
  height: 400px;
  background-color: rgb(30, 210, 111);
}
</style>