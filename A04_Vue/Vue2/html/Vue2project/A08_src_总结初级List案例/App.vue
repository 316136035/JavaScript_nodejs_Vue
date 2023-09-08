<template>
  <div id="app">
    <!-- 创建组件 定义属性/传入方法-->
    <MyHeader :additem="additem" />
    <hr />
    <MyList :list="list" :mychange="mychange" :deleteitem="deleteitem" />
    <MyFooter
      :list="list"
      :myselectorunselect="myselectorunselect"
      :myreverseelection="myreverseelection"
      :mydeletecheckbox="mydeletecheckbox"
    />
    <hr />
  </div>
</template>

<script>
// 引入组件
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";

//  定义一个组件
export default {
  // 声明组件名称
  name: "App",
  // 构件注册组件
  components: {
    // 注册多个组件
    MyHeader: MyHeader,
    MyList: MyList,
    MyFooter: MyFooter,
  },
  data() {
    return {
      list: [
        { id: "001", tilel: "吃饭", check: true },
        { id: "002", tilel: "睡觉", check: true },
        { id: "003", tilel: "看电影", check: false },
        { id: "004", tilel: "学习", check: true },
      ],
    };
  },
  methods: {
    //定义一个添加对象方法（通过模板把这个方法传到子组件），参数是子组件传参
    additem(item) {
      console.log(
        "我是APP的additem方法，接受了MyHeader.vue中add方法返回的数据",
        item
      );
      this.list.unshift(item);
    },
    //定义一个选择方法（通过模板把这个方法传到子组件），参数是子组件传参
    mychange(id) {
      this.list.forEach((item) => {
        if (item.id == id) item.check = !item.check;
      });
    },
    //定义一个选择方法（通过模板把这个方法传到子组件），参数是子组件传参
    deleteitem(id) {
      this.list = this.list.filter((item) => {
        return item.id !== id;
      });
    },

    //定义一个选择方法全选或者全不选（通过模板把这个方法传到子组件），参数是子组件传参
    myselectorunselect(is) {
      console.log(is);
      if (is) {
        this.list.forEach((item) => {
          item.check = true;
        });
      } else {
        this.list.forEach((item) => {
          item.check = false;
        });
      }
    },
    //定义一个反选方法（通过模板把这个方法传到子组件），参数是子组件传参
    myreverseelection() {
      this.list.forEach((item) => {
        item.check = !item.check;
      });
    },
    //定义一个删除方法（通过模板把这个方法传到子组件），参数是子组件传参
    mydeletecheckbox() {
      this.list = this.list.filter((item) => {
        return !item.check;
      });
    },
  },
};
</script>

<style>
</style>
