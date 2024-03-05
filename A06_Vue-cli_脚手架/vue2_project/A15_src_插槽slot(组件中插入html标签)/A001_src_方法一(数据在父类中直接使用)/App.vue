<!-- 模版 -->
<template>
  <!-- #app -->
  <div id="app">
<!-- 组件 -->
    <DefaultSlot>
      <!-- template标签不显示在  slot="DefaultSlot"使用插槽 -->
      <template slot="DefaultSlot">
        <ul>
          <!-- 遍历数组 -->
          <li v-for="(item, index) in carBrands" :key="index">{{ item }}</li>
        </ul>
        <img
          src="https://prod.cosy.aws.bmwchina.cloud/bmwweb/cosySec?COSY-EU-100-2545ffySlJrjGRPixrQbkDlWrjGocRozmVxSbyFn%25RcRoepMMqMESGuRIHFrQbvKbyFndl38jvmr4cYiwd5wcRoLz2ywwGrjGe8dprQbLDWcQW7%251uSRkqoQh47wMvcYi9SKEPMb3islBglUjGRcRScH7wuMbnMdg9RyJGy5iKnrQ%25r9SejW8zWuKbMqogqaDJtl3ilUCGwcRScHb8gMbnMdJozyJGy5QinrQ%25r98StW8zWuo86qogqa3s8l3ilUEQ8cRScH7qBMb3wgnXMESVu91Mb30XMqmyFntBoJltJ0ab6yJRpsDwqQvq0zoaUW8JGI4vZq0zoaUW8JZWsQAq0zobUHqoQIGll23cYiDHdl3HarQbTcYiCjd5cRo1W7%25B0uDW8JtMESj45cRokW7%25B0EaW8amMb3ZV7em4Qzq0zRaJ%25dQ9oyJRP7TMESVQ1%253Fhs3%25cRoeyckSMES%25d"
          alt=""
        />
      </template>
    </DefaultSlot>

    <DefaultSlot>
      <template slot="DefaultSlot">
        <ul>
          <li v-for="(item, index) in movies" :key="index">{{ item }}</li>
        </ul>
        <video controls src="blob:https://jx.mp4pa.com/44012a11-202b-4fc1-a015-dcd1c117fd37"></video>
      </template>
    </DefaultSlot>

    <DefaultSlot>
      <template slot="DefaultSlot">
        <ul>
          <li v-for="(item, index) in phoneBrands" :key="index">{{ item }}</li>
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
  data() {
    return {
      carBrands: ["丰田", "宝马", "奔驰", "奥迪", "特斯拉"],
      movies: ["星际穿越", "阿凡达", "盗梦空间", "泰坦尼克号", "头号玩家"],
      phoneBrands: ["Apple", "Samsung", "Huawei", "Xiaomi", "OPPO"],
    };
  },
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
