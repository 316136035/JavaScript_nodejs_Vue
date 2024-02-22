<!-- 模版 -->
<template>
  <div id="app">
    <!-- 头部组件 把方法传给子组件 -->
    <Header :additem="additem"></Header>
    <hr />
    <!-- 列表组件  
      :list="list"把list数据传给Container_List组件    
      :changecheckbox="changecheckbox"把函数changecheckbox传给Container_List组件 -->
    <Container_List :list="list"  :changecheckbox="changecheckbox" ></Container_List>
    <hr />
    <Footer></Footer>
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
  methods:{
    //定义追加对象到list数组的方法 （模版把函数传到Header组件中调用 ）
    additem(item){this.list.push(item)},
   
    changecheckbox(id){
      this.list.forEach((item)=>{
        if(item.id==id){
          item.check=!item.check
        }
      })
    }
  },
  // 定义数据
  data() {
    return {
      list: [
        {
          id: 1,
          name: "得力(deli)6色荧光笔套装 考试复习彩色醒目标记笔 手帐可用水性记号笔6支/盒DL-S624",
          price: 25,
          check:true

        },
        {
          id: 2,
          name: "百草味 东北松子500g 坚果量贩手剥开口原味干果每日坚果礼物送礼",
          price: 74.,
          check:false
        },
        {
          id: 3,
          name: "名爵（MEJUE）厨房水槽304不锈钢龙头洗菜池洗碗盆一体式台下盆淘菜水池槽",
          price: 139,
          check:true
        },
      ],
    };
  },
};
</script>

<!-- css样式 -->
<style scoped>
#app {
  text-align: center;
  /* 边框样式组合写法 (边框样式,边框宽度,边框颜色) （通用边框属性）*/
  border: solid 2px rgb(100, 0, 0);
}
</style>
