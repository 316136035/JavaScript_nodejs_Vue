<!-- 模版 -->
<template>
  <div>
    <div>
      <input type="number" v-model.number="item.sku" />
      <input type="Text" v-model="item.name" />
      <input type="number" v-model="item.price" />
      <button v-on:click="ADDitem(item)">添加</button>
    </div>
    <div>
      <table>
        <caption>
          标题
        </caption>
        <!-- 标表头 -->
        <tr>
          <th>序号</th>
          <th>ID</th>
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
        <div>下面经过过滤器的显示</div>
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
  </div>
</template>

<script>
/**引入模板映射要用到的类
 * mapState获取index.js文件中的数据
 * mapGetters调用index.js文件中getters配置项的函数
 *
 */
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
//暴露组件的变量和方法 等等  -->
export default {
  name: "JdPageDisplay",
  data() {
    return {
      item: { sku: 0, name: "", price: 0 },
    };
  },
  //计算属性
  computed: {
     //模板中借助mapStat函数映射到state配置对象中(配置对象中的属性名,模板中的属性名 )
    ...mapState({ list: "list" }),
     //模板中借助mapGetters函数映射到getters配置对象中(置对象中的函数名,模板中的函数名 )
    ...mapGetters({ filteshow: "filteshow" }),
  },
  //方法
  methods: {
    /*    deleteitem(sku) {
       //调用$store中的deleteitem方法
      this.$store.dispatch("deleteitem", sku);
     }, */
    //模板中借助mapActions函数映射到 actions配置对象中(置对象中的函数名,模板中的函数名 )
    ...mapActions({ deleteitem: "deleteitem" }),
    /*   //模板中传统写法
    ADDitem() {
      //调用$store中的ADDitem方法 
      this.$store.commit("ADDitem",this.item);
   },  */
    //模板中借助mapMutations函数映射到mutations配置对象中(置对象中的函数名,模板中的函数名 )
    ...mapMutations({ ADDitem: "ADDitem" }),
  },
};
</script>

<!-- scoped代表只能在当前组件使用的css样式 -->
<style scoped>
</style>
