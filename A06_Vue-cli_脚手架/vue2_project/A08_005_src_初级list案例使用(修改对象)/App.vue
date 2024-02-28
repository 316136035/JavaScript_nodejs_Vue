<!-- 模版 -->
<template>
  <div id="app">
    <!-- 头部组件   -->
    <Header></Header>
    <hr />
    <!-- 列表组件  
      :list="list"把list数据传给Container_List组件    
    -->
    <Container_List :list="list"></Container_List>
    <hr />
    <!-- 列表组件  
      :list="list"把list数据传给Footer组件  
    
    
       -->
    <Footer :list="list"> </Footer>
  </div>
</template>


<script>
// 引入组件
import Header from "./components/Header.vue";
import Container_List from "./components/Container_List.vue";
import Footer from "./components/Footer.vue";
//暴露主组件的变量和方法 等等  -->
export default {
  name: "App", //自定义组件名称
  // 注册组件
  components: {
    Header: Header,
    Container_List: Container_List,
    Footer: Footer,
  },
  // 定义方法
  methods: {
    //定义追加对象到list数组的方法 （任意组件间通讯，定义给Header组件中调用 ）
    additem(item) {
      this.list.push(item);
    },

    //定义方法改变checkbox选中状态的方法（任意组件间通讯，定义给Container_Item组件中调用 ）
    changecheckbox(id) {
      //遍历list数组
      this.list.forEach((item) => {
        //判断id是否等于当前遍历对象的id
        if (item.id === id) item.check = !item.check;
      });
    },

    //定义方法删除对象的方法（任意组件间通讯，定义给Container_Item组件中调用）
    delitem(id) {
      //使用过滤器实现（return 返回新的数据，赋值给list数组）
      this.list = this.list.filter((item) => {
        return item.id != id;
      });
    },
    //定义方法改变全选状态的方法（任意组件间通讯，定义给Footer组件中调用 ））
    select_All_none(check) {
      this.list.forEach((item) => {
        item.check = check;
      });
      //定义方法删除选中状态的方法（模版把函数传到Container_Item组件中调用 ））
    },
    //定义一个删除选中的方法（任意组件间通讯定义给到Footer组件中调用），
    DeleteCheckboxAll() {
      this.list = this.list.filter((item) => {
        return !item.check;
      });
    },
    revise(reviseitem,name){
      console.log(reviseitem);
        //遍历list数组
      this.list.forEach((item) => {
        //判断id是否等于当前遍历对象的id
        if (item.id === reviseitem.id) item.name = name;
      });
    }
  },

  // 定义数据
  data() {
    return {
      list: [],
    };
  },
  //初始化
  //当组件挂载后调用
  mounted() {
    //在VUE的原型上的$bus(事件总线)中绑定additem函数
    this.$bus.$on("additem", this.additem);
    //在VUE的原型上的$bus(事件总线)中绑定changecheckbox函数
    this.$bus.$on("changecheckbox", this.changecheckbox);
    //在VUE的原型上的$bus(事件总线)中绑定delitem函数
    this.$bus.$on("delitem", this.delitem);
    //在VUE的原型上的$bus(事件总线)中绑定select_All_none函数
    this.$bus.$on("select_All_none", this.select_All_none);
    //在VUE的原型上的$bus(事件总线)中绑定DeleteCheckboxAll函数
    this.$bus.$on("DeleteCheckboxAll", this.DeleteCheckboxAll);
     //在VUE的原型上的$bus(事件总线)中绑定revise函数
    this.$bus.$on("revise", this.revise);

    //获取本地存储数据
    const list = window.localStorage.getItem("list");
    if (list != null) {
      //替换数据
      this.list = JSON.parse(list);
    }
  },
  // 监听数据
  watch: {
    //监视数组对象
    list: {
      // immediate: true, //初始化的时候调用
      deep: true, //开启深度监听
      // 要监听的属性发现改变就会调用这个 handler方法  (修改对象中的属性时，对象的地址是不变的)
      handler(newValue) {
        window.localStorage.setItem("list", JSON.stringify(newValue));
      },
    },
  },
  //销毁前
  beforeDestroy() {
    //销毁前把全局事件总线方法关闭
    this.$bus.$off("additem");
    this.$bus.$off("changecheckbox");
    this.$bus.$off("delitem");
    this.$bus.$off("select_All_none");
    this.$bus.$off("DeleteCheckboxAll");
    this.$bus.$off("revise");
 
  },
};
</script>

<!-- css样式 -->
<style scoped>
#app {
  /* 边框样式组合写法 (边框样式,边框宽度,边框颜色) （通用边框属性）*/
  border: solid 2px rgb(100, 0, 0);
}
</style>
