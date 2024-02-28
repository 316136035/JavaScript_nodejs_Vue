<!-- 模版 -->
<template>
  <tr id="item">
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
    <td>{{ item.id }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.price }}</td>
    <!-- v-modle="item.check"  这种方法不要用（双向绑定类对象属性，uve是检测外层的对象使用不报错能当双向绑定类对象就会出错） -->
    <td id="del"><button v-on:click="deletelitem(item.id)">删除</button></td>
  </tr>
</template>
<script>
//暴露主组件的变量和方法 等等  -->
export default {
  name: "Container_Item",
  /*声明接受的同时对数据进行类型限制*/
  props: {
    item: Object, //接受父组件传过来的对象
  },
  methods: {
    //点击选择框触发的方法
    ischeckbox(id) {
      //$emit触发vue原型上$bus绑定的changecheckbox事件,参数
      this.$bus.$emit("changecheckbox", id);
    },
    //点击删除按钮触发的方法
    deletelitem(id) {
      if (confirm("确认删除？")) {
     //$emit触发vue原型上$bus绑定的delitem事件,参数
        this.$bus.$emit("delitem", id);
      }
    },
  },
};
</script>

<style scoped>
/* :last-child 最后一个子元素的样式 */
#del {
  /* 隐藏最后一个子元素的样式 */
  opacity: 0;
}
/* :hover鼠标指针浮动在其上时的样式 */
#item:hover {
  background-color: rgba(4, 167, 88, 0.43);
}
/* :hover 鼠标指针浮动在其上时的样式 */
#item:hover :last-child {
  /* 显示最后一个子元素的样式*/
  opacity: 1;
}
</style>