<!-- 模版 -->
<template>
  <div id="app">
    <!-- 头部组件 把方法传给子组件 -->
    <Header :additem="additem"></Header>
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
     :select_All_none="select_All_none" 
     :DeleteCheckboxAll="DeleteCheckboxAll">
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
    select_All_none(check){
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
      list: [
        {
          id: 1,
          name: "得力(deli)6色荧光笔套装 考试复习彩色醒目标记笔 手帐可用水性记号笔6支/盒DL-S624",
          price: 25,
          check: true,
        },
        {
          id: 2,
          name: "百草味 东北松子500g 坚果量贩手剥开口原味干果每日坚果礼物送礼",
          price: 74,
          check: false,
        },
        {
          id: 3,
          name: "名爵（MEJUE）厨房水槽304不锈钢龙头洗菜池洗碗盆一体式台下盆淘菜水池槽",
          price: 139,
          check: true,
        },
      ],
    };
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
