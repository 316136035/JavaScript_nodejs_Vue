<template>
  <li>
    <label>
      <input type="checkbox" :checked="item.check" @change="change(item.id)" />
      <!-- v-modle="item.check"  这种方法不要用（双向绑定类对象属性，uve是检测外层的对象使用不报错能当双向绑定类对象就会出错） -->
      <!--  v-show=“表达式” 显示/不显示-->
      <span v-show="!item.isEdit">{{ item.tilel }}</span>
      <!--  v-show=“表达式” 显示/不显示
               :value="item.tilel" 获取当前文本值作为输入框值
                @blur="blur(item,$event)"  离焦事件（当前对象输入框本事）
                ref="inputText"  （同等于id=inputText）-->
      <input
        type="text"
        v-show="item.isEdit"
        :value="item.tilel"
        @blur="blur(item, $event)"
        ref="inputText"
        
      />
    </label>
    <!-- 删除按钮 -->
    <button @click="deleteid(item.id)">删除</button>
    <!-- 修改按钮 -->
    <button v-show="!item.isEdit" @click="updateid(item)">修改</button>
  </li>
</template>

<script>

export default {
  name: "MyItem",

  //声明接受父组件传来的属性/方法
  //props: ["item", "mychange", "deleteitem"],
  props: ["item"],
  methods: {
    //change改变事件调用方法
    change(id) {
      //调用app组件中的mychange()方法
      // this.mychange(id);
      this.$bus.$emit("mychange", id);
    },
    //按钮事件删除按钮
    deleteid(id) {
      //询问框
      if (confirm("确认删除吗？")) {
        //调用app组件中的deleteitem()方法
        //this.deleteitem(id);
        this.$bus.$emit("deleteitem", id);
      }
    },
    //按钮事件修改按钮  tem.hasOwnProperty
    updateid(item) {
      //判断对象是否有这个参数
      if (item.hasOwnProperty("isEdit")) {
        //isEdit = true
        item.isEdit = true;
      } else {
        //没有这个参数就追加参数
        this.$set(item, "isEdit", true);
      }
      //这个nextTick方法等待doc更新结束后执行
      this.$nextTick(function () {
        //通过ref获取焦点
        this.$refs.inputText.focus();
      });
    },
    //离焦事件
    blur(item, event) {
       //isEdit = false
      item.isEdit = false;
      console.log(event.target.value);
      //判断输入框值是否为空，是空就返回 
      if (!event.target.value.trim()) return alert("输入不能为空!");
      //执行事件总线的updateitem方法（单前对象的id，输入框值）
      this.$bus.$emit("updateitem", item.id, event.target.value);
    },
  },
};
</script>

<style>
li button {
  /* 设置位置右 */
  float: right;
  /* 设置隐藏 */
  display: none;
  /* 设置上边距 */
  margin-top: 0px;
  /* 设置右边距 */
  margin-right: 5px;
  /**设置圆角按钮 大小*/
  border-radius: 20px;
  background-color: rgb(165, 42, 73);
}

li:hover {
  /* 背景颜色 */
  background-color: rgb(42, 165, 118);
}

li:hover button {
  /* 设置显示 */
  display: block;
}
li {
  /* 设置上边距 */
  margin-top: 10px;
}
</style>