<template>
  <div id="app" class="app">
    <!-- 创建模块 定义属性 -->
    <category title="美食">
      <!--template标签不会显示在页面 使用插槽 slot="slot1" 接受插槽传参slot-scope={foods}（必须使用template标签） -->
      <template  slot="slot1" slot-scope={foods}>
         <ul>
            <!-- 遍历 -->
        <li v-for="(item, i) in foods" :key="i">{{ item }}</li>
        </ul>
       </template>
    </category>

    <category title="游戏">
      <template slot="slot2" slot-scope={games}>
      <!--template标签不会显示在页面 使用插槽 slot="slot1" 接受插槽传参slot-scope={games}（必须使用template标签） -->
      <ol >
        <!-- 遍历 -->
        <li v-for="(item, i) in games" :key="i">{{ item }}</li>
      </ol>
      </template>
    </category>
    <category title="电影">
      <template slot="slot3" slot-scope={films} >
         <!--template标签不会显示在页面 使用插槽 slot="slot1" 接受插槽传参slot-scope={films}（必须使用template标签） -->
      <video controls src="./assets/V.mp4"></video>
      <ul >
        <!-- 遍历 -->
        <li v-for="(item, i) in films" :key="i">{{ item }}</li>
      </ul>
        </template>
    </category>
  </div>
</template>

<script>
// 引入组件
import category from "./components/Category.vue";

//  定义一个组件
export default {
  // 声明组件名称
  name: "App",
  // 构件注册组件
  components: {
    // 注册多个组件
    category: category,
  },
};
</script>

<style scoped>
.app {
  /* 排序方式 */
  display: flex;
  /* 间距 */
  justify-content: space-around;
}
img {
  width: 200px;
  height: 100px;
}
video {
  width: 100%;
  height: 200px;
}
</style>
