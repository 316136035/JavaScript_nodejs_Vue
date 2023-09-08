<template>
  <div>
    <div>
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
        </li>
      </ul>
    </div>
    <div>
      <router-view></router-view>
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
    };
  },
  name: "DepartmentChildren2",
};
</script>

<style>
</style>