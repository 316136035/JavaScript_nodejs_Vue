<template>
  <div class="container">
    <table>
      <caption>
        标题
      </caption>
      <!-- 标表头 -->
      <tr>
        <th class="serial">序号</th>
        <th class="id">ID</th>
        <th>商品名称</th>
        <th>现价</th>
      </tr>
      <tbody class="tbody">
        <tr v-for="(item, index) in list" :key="index">
          <th>{{ index + 1 }}</th>
          <th>{{ item.sku }}</th>
          <th>{{ item.name }}</th>
          <th>{{ item.price }}</th>
          <th><button v-on:click="deleteitem(item.sku)">删除</button></th>
        </tr>
      </tbody>
      <hr />
      <tbody class="tbody">
        <tr v-for="(item, index) in filteshow" :key="index">
          <th>{{ index + 1 }}</th>
          <th>{{ item.sku }}</th>
          <th>{{ item.name }}</th>
          <th>{{ item.price }}</th>
          <th><button v-on:click="deleteitem(item.sku)">删除</button></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  computed: {
    //获取Vuex模版中state配置对象的数据---------初级写法
    // list() {return this.$store.state.container.list; },
    //模板中借助mapState函数，映射到Vuex模版中的state配置对象中的数据("模块名称,{配置对象中的属性名:模板中的属性名})---------对象写法
    // ...mapState("container",{list:"list"})
    //模板中借助mapState函数，映射到Vuex模版中state配置对象中的数据["属性名","属性名"]---------数组写法
    ...mapState("container", ["list"]),
    //用Vuex模版中getters配置对象中的filteshow方法["模块名称/函数名"]
    // filteshow() { return this.$store.getters["container/filteshow"]; },
    //模板中借助mapGetters函数，映射到Vuex模版中getters配置对象中的函数("模块名称",{置对象中的函数名:模板中的函数名})---------对象写法
    ...mapGetters("container", {filteshow:"filteshow"})
    //模板中借助mapGetters函数，映射到Vuex模版中state配置对象中的数据("模块名称",["函数名"])---------数组写法
    // ...mapGetters("container", ["filteshow"])
  },
  watch: {
    KeywordQuery() {
      console.log(this.name)
    }
  }
 
 
};
</script>

<style scoped>
table {
  /* 视图宽度 */
  width: calc(100%);
  /* 设置标题位置 
            top 头部
            bottom 尾部*/
  caption-side: top;
  /* 边框样式组合写法 (边框样式,边框宽度,边框颜色) （通用边框属性）*/
  border: solid 2px rgb(100, 0, 0);
  /* 设置表单列宽  auto 自动的  fixed固定的*/
  table-layout: auto;
  /* 设置单元格之间的边框距离（前提不能使用合并单元格之间的边框） */
  /* border-spacing: 0px; */
  /*  合并单元格之间的边框 （设置单元格之间的边框距离就不生效了）*/
  border-collapse: collapse;
  /* 隐藏没有内容的单元格 （前提不能使用合并单元格之间的边框*/
  empty-cells: hide;
}

th,
td {
  /* 边框样式组合写法 (边框样式,边框宽度,边框颜色) （通用边框属性）*/
  border: solid 1px rgb(0, 100, 70);
}
</style>