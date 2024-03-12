<template>
  <div>
   <div>
    <li>
      <ul>
        <!-- 品牌 -->
        <router-link to="/front_page/Brand">品牌</router-link>
      </ul>
      <ul>
        <!-- 简介 -->
        <router-link to="/front_page/Introduction">简介</router-link>
      </ul>
    </li>
   </div>
   
      <!-- 路由视图 -->
      <router-view>************</router-view>
    
  </div>
</template>

<script>
export default {
  name: "front_page",
  components: {

  },
  mounted() {
    console.log("首页组件加载完成");
  },
  beforeDestroy() {
    console.log("首页组件销毁完成");
  },
};
</script>

<style scoped>
  li{
    width: 1200px;
            height: 1000px;
            background-color: dimgrey;
            /* 居中 */
            margin: 0 auto;
            /* 将改当前元素变成伸缩容器 ，
            缩容器下面的全部子背元素会变成伸缩项目（仅对子背元素有影响）
            1.仅伸缩容器的子元素成为了伸缩项目，孙子元素、重孙子元素等后代，不是伸缩项目。
            2.无论原来是哪种元素(块、行内块、行内) ，一旦成为了伸缩项目，全都会“块状化”.*/
            display: flex;
            /* 换行方式 
            nowrap 不换行（默认）
            wrap 换行（注意：要使用对齐方式）
            wrap-reverse 反向换行（注意：要使用对齐方式）*/
            flex-wrap: wrap;
            /* 设置主轴方向 垂直 */
           
            flex-direction: column;
  }
  ul{
    width: 40px;
    height: 40px;

  }
</style>./Front_page.vue