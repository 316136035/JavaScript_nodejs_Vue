<!-- 模版 -->
<template>
  <tr id="item">
    <td>{{ item.id }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.price }}</td>
    <!-- 双向绑定对象中的选择框属性 0为不选择，1为选中 -->
    <td> <input id="checkbox" type="checkbox"  :checked="item.check"  v-on:change="ischeckbox(item.id)" /></td>
<!-- v-modle="item.check"  这种方法不要用（双向绑定类对象属性，uve是检测外层的对象使用不报错能当双向绑定类对象就会出错） -->
  </tr>
</template>
<script>
//暴露主组件的变量和方法 等等  -->
export default {
  name: "Container_Item",

  /*声明接受的同时对数据进行类型限制*/
  props: {
    //接受父组件传过来的对象
    item: Object,
    changecheckbox:Function
  },

  methods: {
    ischeckbox(id){
      this.changecheckbox(id)
   
    }
}
};

</script>

<style scoped>

th,td {
 /* 边框样式组合写法 (边框样式,边框宽度,边框颜色) （通用边框属性）*/
  border: solid 1px rgb(81, 1, 255);
 }

</style>