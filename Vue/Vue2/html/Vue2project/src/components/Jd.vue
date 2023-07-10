<template>
  <div>
    <div>
      <div>京东列表</div>
      <div class="processing">上面组件的和放大10倍：{{ processing }}</div>
      <label for="text">请输入sku：</label>
      <input
        type="text"
        name="text"
        v-model="text"
        placeholder="格式sku1,sku2,sku3"
      />
      <button @click="add_sku()">添加sku</button>
      <button @click="start_request()">开始请求</button>
      <button @click="terminate_request()">终止请求</button>
    </div>
    <div>
      <table>
        <ol slot="0">
          <li v-for="item in jdlist" :key="item.id">
            <th>{{ item.id }}</th>
            <th>{{ item.name }}</th>
            <th>{{ item.p }}</th>
            <th>{{ item.epp }}</th>
          </li>
        </ol>
      </table>
    </div>
  </div>
</template>

<script>
/**引入映射要用到的类*/
import { mapState, mapGetters, mapMutations, mapActions, Store } from "vuex";
export default {
  name: "TestList",
  data() {
    return { text: "" };
  },
  computed: {
    //  /**模板中传统写法（获取jd模板中的jdlist参数）*/
    // jdlist() {
    //   /**获取state中的jd参数*/
    //   return this.$store.state.jd.jdlist;
    // },
    /**模板中借助 mapActions 使用映射生成方法...代表生成在本类中)*/
    /**映射到 this.$store.state("calculate模板名称",{方法名1:模板中的方法名1,方法名2:模板中的方法名2})(参数在标签参)*/
    /**映射到this.$store.state("calculate模板名称",[方法名1，方法名2]) 数组写法  方法名和参数名必须一样*/
    ...mapState("jd", ["jdlist"]),

    //获取calculate对象中的getters中的方法
    /**模板中传统写法（获取模板中的getters中的方法（上面组件的和放大10倍））*/
    // processing() {
    //   /**调用getters中的calculate中的processing方法*/
    //   return this.$store.getters["calculate/processing"];
    // },
    /**模板中借助 mapGetters 使用映射生成方法...代表生成在本类中)*/
    /**映射到 this.$store.getters("calculate模板名称",{方法名1:模板中的方法名1,方法名2:模板中的方法名2})(参数在标签参)*/
    //...mapGetters("calculate", {processing:"processing"}),
    ...mapGetters("calculate", ["processing"]),

    
  },
  methods: {
    /**模板中传统写法（添加SKU）*/
    add_sku() {
      /**拆封成数组*/
      const array = this.text.split(",");
      /**调用mutations中的方法*/
      this.$store.commit("jd/ADD_SKU", array);
    },
 
    start_request(action, value) {
      /**调用actions中的方法*/
      this.$store.dispatch("jd/start_request");
    },
    terminate_request() {
      /**停止定时器（从state中获取）*/
      clearInterval(this.$store.state.jd.isconsole);
    },
  },
};
</script>


<style scoped>
.processing {
  background-color: chartreuse;
}
</style>