<!-- 模版 -->
<template>
  <!-- #app -->
  <div id="app">
    <!-- 组件 -->
    <DefaultSlot>
      <!-- template标签不显示在  slot="DefaultSlot"使用插槽  slot-scope= "AcceptFoods">接受子组件传过来的参数(返回的是对象) -->
      <template slot="DefaultSlot" slot-scope="AcceptFoods">
        <ul>
          <!-- 遍历数组 -->
          <li v-for="(item, index) in AcceptFoods.foods.carBrands" :key="index">
            {{ item }}
          </li>
        </ul>
      </template>
    </DefaultSlot>

    <DefaultSlot>
      <template slot="DefaultSlot" slot-scope="AcceptFoods">
        <ol>
          <li v-for="(item, index) in AcceptFoods.foods.movies" :key="index">
            {{ item }}
          </li>
        </ol>
      </template>
    </DefaultSlot>

    <DefaultSlot>
      <template slot="DefaultSlot" slot-scope="AcceptFoods">
        <ul>
          <li
            v-for="(item, index) in AcceptFoods.foods.phoneBrands"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </template>
    </DefaultSlot>
  </div>
</template>


<script>
// 引入组件
import DefaultSlot from "./components/DefaultSlot";
// 暴露组件
export default {
  name: "App", //自定义组件名称
  // 注册组件
  components: {
    DefaultSlot: DefaultSlot,
  },
  data() {},
};
</script>

<!-- css样式 -->
<style>
#app {
  /* 布局 */
  display: flex;
  /* 间距 */
  justify-content: space-around;
}
img {
  /* 宽度 */
  width: 200px;
  /* 高度 */
  height: 200px;

  /* 设置背景不重复 */
  background-repeat: no-repeat;
}
</style>
