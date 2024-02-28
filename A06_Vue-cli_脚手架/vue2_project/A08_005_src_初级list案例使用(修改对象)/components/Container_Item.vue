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
    <td>
      <!--  
         v-show="item.isedit"判断是否显示输入框
         v-on:blur="blur_input(item, $event) 绑定blur事件（参数为对象和事件对象） -->
      <input
        type="text"
        v-show="item.isedit"
        v-on:blur="blur_input(item, $event)"
        ref="input"
      />
      <!--  v-show="!item.isedit"判断是否显示输入框 -->
      <span v-show="!item.isedit"> {{ item.name }}</span>
    </td>
    <td>{{ item.price }}</td>
    <!-- v-modle="item.check"  这种方法不要用（双向绑定类对象属性，uve是检测外层的对象使用不报错能当双向绑定类对象就会出错） -->
    <td id="revise">
      <!-- v-show="!item.isedit"判断是否显示button
       v-on:click="reviseitem(item)" 绑定click事件（参数为对象）  -->
      <button v-show="!item.isedit" v-on:click="reviseitem(item)">修改</button>
    </td>
    <td id="del">
      <!-- v-on:click="deletelitem(item.id)" 绑定click事件（参数为对象的id属性） -->
      <button v-on:click="deletelitem(item.id)">删除</button>
    </td>
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
    //点击修改按钮触发的方法
    reviseitem(item) {
      //修改对象的属性
      this.$set(item, "isedit", true);
      //$nextTick方法在DOC重新渲染后执行其指定的回调
      this.$nextTick(() => {
        //refs获取input的ref属性，再获取输入框的焦点
         this.$refs.input.focus();
      });
    },
    //点击输入框离焦事件
    blur_input(item, event) {
      console.log(event.target.value); //获取输入框的值
      this.$delete(item, "isedit"); //删除对象的属性
      this.$bus.$emit("revise", item, event.target.value); //触发vue原型上$bus绑定的revise事件,参数,参数
    },
  },
};
</script>

<style scoped>
td {
  text-align: center;
}
/* :last-child 最后一个子元素的样式 */
#revise,
#del {
  /* 隐藏最后一个子元素的样式 */
  opacity: 0;
}
/* :hover鼠标指针浮动在其上时的样式 */
#item:hover {
  background-color: rgba(4, 167, 88, 0.43);
}

/* :hover 鼠标指针浮动在其上时的样式 */
#item:hover #revise,
#item:hover #del {
  /* 显示最后一个子元素的样式*/
  opacity: 1;
}

#del button {
  width: 100%;
  height: 100%;
  border-width: inherit; /* 继承父元素（td）的边框宽度 */
  border-style: inherit; /* 继承父元素（td）的边框样式 */
  background-color: red;
  border-radius: 5px; /* 如果需要完全一致，移除按钮的圆角 */
  outline: none; /* 可选，移除按钮的轮廓线 */
}

#revise button {
  width: 100%;
  height: 100%;
  border-width: inherit; /* 继承父元素（td）的边框宽度 */
  border-style: inherit; /* 继承父元素（td）的边框样式 */
  background-color: green;
  border-radius: 5px; /* 如果需要完全一致，移除按钮的圆角 */
  outline: none; /* 可选，移除按钮的轮廓线 */
}
</style>