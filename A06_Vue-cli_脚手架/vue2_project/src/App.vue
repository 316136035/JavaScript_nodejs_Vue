<!-- 模版 -->
<template>
  <div id="app">
    <!-- 顶部导航 -->
    <Top></Top>
    <!-- 内容区域 -->
    <div class="content_area container">
     
        <div class="title">
          <!-- router-link路由路径 to="/Front" 切换到哪个页面  可以写链接也可以写对象{path:'/Front' name:'Front'}-->
          <!-- replace属性它不会将新的路由记录添加到浏览器的历史记录栈中，相反，replace属性会触发router.replace()方法而不是router.push()方法来执行页面跳转。 -->
          <router-link replace active-class="active" to="/frontpage">首页</router-link>
          <router-link active-class="active" to="/monitor">监控</router-link>
       
        </div>
    </div>
      <hr>
          <!-- 路由视图 -->
          <router-view class="container"></router-view>
       
    <Bottom></Bottom>
  </div>
</template>

<script>
import Top from "./components/Top";
import Bottom from "./components/Bottom";
// 暴露组件
export default {
  name: "App", //自定义组件名称
  components: {
    Top: Top,
    Bottom: Bottom,
  },

  data() {
    return {};
  },
};
</script>

<!-- css样式 -->
<style>
.content_area {
  /* 居中 */
  margin: 0 auto;
  /* 将改当前元素变成伸缩容器 ，
            缩容器下面的全部子背元素会变成伸缩项目（仅对子背元素有影响）
            1.仅伸缩容器的子元素成为了伸缩项目，孙子元素、重孙子元素等后代，不是伸缩项目。
            2.无论原来是哪种元素(块、行内块、行内) ，一旦成为了伸缩项目，全都会“块状化”.*/
  display: flex;
  /* 主轴的方向：
             row  水平正常方向 左→右 （默认）
             row-reverse 水平反转 右→左 
             column 垂直正常方向 上→下 
             column-reverse 垂直正常方向 下→上*/
  /* 换行方式 
            nowrap 不换行（默认）
            wrap 换行（注意：要使用对齐方式）
            wrap-reverse 反向换行（注意：要使用对齐方式）
            */
  /* 复合写法:主轴方向-换行方式 */
  flex-flow: row wrap;
  /* 主轴的起点位置排序-左对齐 （默认主轴的方向不变）*/
  justify-content: flex-start;
}
.title > a {
  font-size: 25px;
  margin: 10px;
}
.active {
  color: red;
}
</style>
