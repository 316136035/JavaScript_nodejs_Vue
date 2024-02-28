<!-- 模版 -->
<template>
  <div id="app">
    <!-- 头部组件    <组件名称v-on:被子组件调用的函数名="父类函数名"></组件名称>    once代表只能触发一次  简单写法  -->
    <Header  v-on:additem="additem"></Header>
    <hr />
    <!-- 列表组件  
      :list="list"把list数据传给Container_List组件    
      :changecheckbox="changecheckbox"把函数changecheckbox传给Container_List组件再传到Container_Item组件中调用 
      :delitem="delitem""把函数changecheckbox传给Container_List组件再传到Container_Item组件中调用 -->
    <Container_List
      :list="list"
      :changecheckbox="changecheckbox"
      :delitem="delitem"
    ></Container_List>
    <hr />
    <!-- 列表组件  
      :list="list"把list数据传给Footer组件  
      :select_All_none="select_All_none" 把select_All_none函数传给Footer组件  
      :DeleteCheckboxAll="DeleteCheckboxAll" 把DeleteCheckboxAll函数传给Footer组件  
       -->
    <Footer
      :list="list"
      v-on:select_All_none="select_All_none"
      v-on:DeleteCheckboxAll="DeleteCheckboxAll"
    >
    </Footer>
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
    //定义追加对象到list数组的方法 （模版把函数传到Header组件中调用 ）
    additem(item) {
      this.list.push(item);
    },

    //定义方法改变checkbox选中状态的方法（模版把函数传到Container_List组件中再传到Container_Item组件中调用 ））
    changecheckbox(id) {
      //遍历list数组
      this.list.forEach((item) => {
        //判断id是否等于当前遍历对象的id
        if (item.id === id) item.check = !item.check;
      });
    },

    //定义方法删除对象的方法（模版把函数传到Container_Item组件中调用 ））
    delitem(id) {
      //使用过滤器实现（return 返回新的数据，赋值给list数组）
      this.list = this.list.filter((item) => {
        return item.id != id;
      });
    },
    //定义方法改变全选状态的方法（模版把函数传到Footer组件中调用 ））
    select_All_none(check) {
      this.list.forEach((item) => {
        item.check = check;
      });
      //定义方法删除选中状态的方法（模版把函数传到Container_Item组件中调用 ））
    },
    //定义一个删除选中的方法（模版把函数传到Footer组件中调用），
    DeleteCheckboxAll() {
      this.list = this.list.filter((item) => {
        return !item.check;
      });
    },
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
};
</script>

<!-- css样式 -->
<style scoped>
#app {
  /* 边框样式组合写法 (边框样式,边框宽度,边框颜色) （通用边框属性）*/
  border: solid 2px rgb(100, 0, 0);
}
</style>
