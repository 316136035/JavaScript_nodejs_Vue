<template>
  <div id="app" class="app">
    <!-- 创建模块 定义属性 -->
    <category title="美食">
      <!--template标签不会显示在页面 使用插槽 slot="slot1"  (v-slot:xx只能作用域template中) -->
      <template slot="slot1">
        <img
          src="https://pic.rmb.bdstatic.com/78877fa9b06fde1065f15aa73a41372f.jpeg"
        />
        <img
          src="https://img2.baidu.com/it/u=849995377,520435495&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
        />
      </template>
      <!--使用插槽 slot="slot2"  (v-slot:xx只能作用域template中) -->
      <ul slot="slot2">
        <li v-for="(item, i) in foods" :key="i">{{ item }}</li>
      </ul>
    </category>
    <category title="游戏">
      <!--使用插槽 slot="slot1"  (v-slot:xx只能作用域template中) -->
      <ul slot="slot1">
        <!-- 遍历 -->
        <li v-for="(item, i) in games" :key="i">{{ item }}</li>
      </ul>
    </category>
    <category title="电影">
      <!--使用插槽 slot="slot1" video标签是视频  controls 代表播放等按钮  (v-slot:xx只能作用域template中) -->
      <video slot="slot1" controls src="./assets/V.mp4"></video>
      <!--使用插槽 slot="slot2"  (v-slot:xx只能作用域template中) -->
      <ul slot="slot2">
        <!-- 遍历 -->
        <li v-for="(item, i) in films" :key="i">{{ item }}</li>
      </ul>
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
