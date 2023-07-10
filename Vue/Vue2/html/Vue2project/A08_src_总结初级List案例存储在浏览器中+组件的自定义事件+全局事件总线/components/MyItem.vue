<template>
  <li>
    <table>
      <input type="checkbox" :checked="item.check" @change="change(item.id)" />
      <!-- v-modle="item.check"  这种方法不要用（双向绑定类对象属性，uve是检测外层的对象使用不报错能当双向绑定类对象就会出错） -->
      <span>{{ item.tilel }}</span>
      <button @click="deleteid(item.id)">删除</button>
    </table>
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
     this.$bus.$emit("mychange",id)
    },
    //按钮事件
    deleteid(id) {
      //询问框
      if (confirm("确认删除吗？")) {
        //调用app组件中的deleteitem()方法
        //this.deleteitem(id);
          this.$bus.$emit("deleteitem",id)
      }
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
  /* 设置大小 */
  margin-top: 3px;
}

li:hover {
  /* 背景颜色 */
  background-color: brown;
}

li:hover button {
  /* 设置显示 */
  display: block;
}
</style>