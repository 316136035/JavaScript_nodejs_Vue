<template>
  <div id="app">
    <!-- 创建组件 定义属性/传入方法-->
    <MyHeader />
    <hr />
    <!-- <MyList :list="list" :mychange="mychange" :deleteitem="deleteitem" /> -->
    <MyList :list="list" />
    <MyFooter
      :list="list"
      @myselectorunselect="myselectorunselect"
      @myreverseelection="myreverseelection"
      @mydeletecheckbox="mydeletecheckbox"
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
      //把json字符串转成对象
      list: JSON.parse(localStorage.getItem("list")) || [],
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
  mounted() {
    //给全局事件总线添加一个方法（方法名，回调参数）
    this.$bus.$on("additem", this.additem);
    this.$bus.$on("mychange", this.mychange);
    this.$bus.$on("deleteitem", this.deleteitem);
  },
  //销毁前
   beforeDestroy(){
    //销毁前把全局事件总线方法关闭
    this.$bus.$off("additem")
      this.$bus.$off("mychange")
        this.$bus.$off("deleteitem")
   },
  

  watch: {
    // 要监听的属性名 要监听多层结构属性名
    list: {
      // immediate:true,   //初始化的时候调用
      deep: true, //开启深度监听
      // 要监听的属性发现改变就会调用这个 handler方法
      handler(newValue, oldValue) {
        //把对象list对象存放在localStorage浏览器存储中
        localStorage.setItem("list", JSON.stringify(newValue));
      },
    },
  },
};
</script>

<style>
</style>
