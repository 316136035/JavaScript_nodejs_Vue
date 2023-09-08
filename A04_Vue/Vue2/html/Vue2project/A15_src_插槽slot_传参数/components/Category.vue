<template>
  <div class="div">
    <h3>{{ title }}</h3>

    <!-- 定义一个插槽  :foods=foods传参给使用者-->
    <slot name="slot1" :foods=foods>
      我是一个插槽slot1，当使用者没有传递具体结构时，我会出现</slot
    >
     <!-- 定义一个插槽  :games=games传参给使用者-->
    <slot name="slot2" :games=games>
      我是一个插槽slot2，当使用者没有传递具体结构时，我会出现</slot
    >
     <!-- 定义一个插槽  :films=films传参给使用者-->
    <slot name="slot3" :films=films>
      我是一个插槽slot3，当使用者没有传递具体结构时，我会出现</slot
    >

  </div>
</template> 

<script>
export default {
  name: "category",
  props: ["title", "dataArray"],
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团',超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《淘神价》"],
    };
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
  background-color: chocolate;
}
.div {
  width: 200px;
  height: 600px;
  background-color: rgb(30, 210, 111);
}
</style>