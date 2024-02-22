<!-- 模版 -->
<template>
  <tr id="item" ref="item" v-on:mouseover="get_focus">
    <td>{{ item.id }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.price }}</td>
    <!--   :checked="item.check" false为不选中，ture为选中
            v-on:change="ischeckbox(item.id)" 绑定改变事件(参数为对象的id属性) -->
    <td>
      <input
        id="checkbox"
        type="checkbox"
        :checked="item.check"
        v-on:change="ischeckbox(item.id)"
      />
    </td>
    <!-- v-modle="item.check"  这种方法不要用（双向绑定类对象属性，uve是检测外层的对象使用不报错能当双向绑定类对象就会出错） -->

    <td id="del"><button>删除</button></td>
  </tr>
</template>
<script>
//暴露主组件的变量和方法 等等  -->
export default {
  name: "Container_Item",
  /*声明接受的同时对数据进行类型限制*/
  props: {
    item: Object, //接受父组件传过来的对象
    changecheckbox: Function, //接受父组件传过来的方法
  },
  methods: {
    //点击选择框触发的方法
    ischeckbox(id) {
      //调用父组件的方法
      this.changecheckbox(id);
    },
      get_focus() {
  
    },
  },
};
</script>

<style scoped>
th,
td {
  /* 边框样式组合写法 (边框样式,边框宽度,边框颜色) （通用边框属性）*/
  border: solid 1px rgb(81, 1, 255);
}
/* #del {
  background-color: red;
  border-radius: 5px;
  visibility: hidden;
  display: none;
} */
</style>