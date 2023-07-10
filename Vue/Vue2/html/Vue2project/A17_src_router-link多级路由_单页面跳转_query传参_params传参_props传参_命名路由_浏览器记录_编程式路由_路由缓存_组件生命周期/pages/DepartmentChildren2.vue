<template>
  <div>
    <div>
      <table :style="{opacity}">
       人员管理显示
      </table>
      <ul>
        <li v-for="item in Children2" :key="item.id">
          <!-- 路由跳转页面，params传参数对象写法 
          使用:to="{name:'messagename'}必须在路由文件.路由中必须给路由命名
          params: {id: item.id}参数(使用params传参数，路由中必须要用占位符:xx)-->
          <router-link
            :to="{
              name: 'departmentChildren2Messagename',
              params: {
                id: item.id,
                name: item.name,
              },
            }"
            >{{ item }}</router-link
          >
          <input type="text" />
        </li>
      </ul>
    </div>
    <div>
      <!-- 缓存组件（跳转的时候不销毁departmentChildren2Messagename组件） :include="[A组件,B组件]" 组件名 -->
      <!-- 子组件要缓存必须要缓存父组件 -->
      <keep-alive include="departmentChildren2Messagename">
        <!-- 组件跳转显示位置 -->
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      Children2: [
        { id: "1", name: "A" },
        { id: "2", name: "B" },
        { id: "3", name: "C" },
        { id: "4", name: "D" },
        { id: "5", name: "E" },
      ],
      opacity:1,
      therad:""

    };
  },
  name: "DepartmentChildren2",
  //路由组件的生命周期激活时
  activated() {
    console.log("DepartmentChildren2激活了");
    //开启定时器
   this.therad= setInterval(()=>{
      this.opacity-=0.01
      if( this.opacity<=0){ this.opacity=1}
          console.log(this.opacity);
    },10)

  },
    //路由组件的生命周期失活时
  deactivated() {
    console.log("DepartmentChildren2死了");
     //关闭定时器
    clearInterval(this.therad)
  },
};
</script>

<style>
</style>