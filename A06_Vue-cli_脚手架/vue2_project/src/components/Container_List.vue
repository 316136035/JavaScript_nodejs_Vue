<!-- 模版 -->
<template>
  <table id="container-list">
    <caption>
      标题
    </caption>
    <!-- 标表头 -->
    <tr>
      <th>选择</th>
      <th>序号</th>
      <th>商品名称</th>
      <th>现价</th>
      <th>删除</th>
    </tr>

    <!-- 使用子组件
     v-for="(item, index) in list" :key="index" 遍历数组 
     :item="item" 把每一个对象传给Container_Item  
     :changecheckbox="changecheckbox" 把父组件的方法传给Container_Item组件
     :delitem="delitem" 把父组件的方法传给Container_Item组件 -->
    <Container_Item
      v-for="(item, index) in list"
      :key="index"
      :item="item"
      :changecheckbox="changecheckbox"
      :delitem="delitem"
    >
    </Container_Item>
  </table>
</template>
<script>
// 引入子组件
import Container_Item from "./Container_Item.vue";
//暴露主组件的变量和方法 等等  -->
export default {
  name: "Container_List",
  // 注册子组件
  components: {
    Container_Item: Container_Item,
  },
  /*声明接受的同时对数据进行类型限制*/
  props: {
    list: Array, //接受父组件传过来的数组
    changecheckbox: Function, //接受父组件传过来的方法
    delitem: Function, //接受父组件传过来的方法
  },
};
</script>

<style scoped>
#container-list {
  /* 视图宽度 */
  width: calc(100%);
  /* 设置标题位置 
            top 头部
            bottom 尾部*/
  caption-side: top;
  /* 边框样式组合写法 (边框样式,边框宽度,边框颜色) （通用边框属性）*/
  border: solid 1px rgb(33, 0, 100);
  /* 设置表单列宽  auto 自动的  fixed固定的*/
  table-layout: auto;
  /* 设置单元格之间的边框距离（前提不能使用合并单元格之间的边框） */
  /* border-spacing: 0px; */
  /*  合并单元格之间的边框 （设置单元格之间的边框距离就不生效了）*/
  border-collapse: collapse;
  /* 隐藏没有内容的单元格 （前提不能使用合并单元格之间的边框*/
  empty-cells: hide;
}
tr {
  /* 边框样式组合写法 (边框样式,边框宽度,边框颜色) （通用边框属性）*/
  border: solid 1px rgb(255, 1, 94);
}


</style>

