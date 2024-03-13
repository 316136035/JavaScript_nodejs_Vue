<template>
  <div class="brand">
    <div>二级路由(品牌)</div>
    <div>
      淘神价通常是指网络平台上出现的极具性价比、折扣力度大或低于市场常规价格的品牌商品。这些品牌并没有统一的标识与名称，因为“淘神价”并非指代某个特定品牌，而是用来形容优惠幅度很大的商品。从您提供的信息中可以看到多个品牌在不同时间点出现了“淘神价”，
    </div>
   <!-- router-link路由路径 to="/frontpage/frontPage_brand/frontPage_brand_show" 切换到哪个页面 
           对象写法(路径名) :to="{ path: '/frontpage/frontPage_brand/frontPage_brand_show' }"  
           对象写法(路由中要:命名路由):to="{ name: 'FrontPage_Brand_Show' }" -->
        <!-- replace属性它不会将新的路由记录添加到浏览器的历史记录栈中，相反，replace属性会触发router.replace()方法而不是router.push()方法来执行页面跳转。 -->
        <!--query传参  :to="{ name: 'FrontPage_Brand_Show',query: {text:item.text}}">  子组件在路由的query中获取 -->
     <div>
      <ul>
        <li v-for="(item,index) in brand_list" :key="index">
          <router-link 
          :to="{ name: 'FrontPage_Brand_Show',params: {text:item.text}}"> 
          {{item.name}}</router-link></li>
      </ul>
    </div>


    <div>
      <!--路由视图 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "brand",
  data() {
    return {
      brand_list:[
      {name:'VERSACE',text:"（范思哲）：意大利奢侈品牌，提供高端男士Polo衫。"},
      {name:'CAMEL',text:"骆驼：户外服装品牌，有男女款冲锋衣出售。"},
      {name:'GXG',text:"国时尚男装品牌，推出过与蓝精灵联名的毛衣。"},
     
      ]
      
    }
  },
  mounted() {
    console.log("二级路由(品牌)组件加载完成");
  },
  beforeDestroy() {
    console.log("二级路由(品牌)组件销毁完成");
  },
};
</script>

<style>
.brand {
  height: 100px;
}
</style>