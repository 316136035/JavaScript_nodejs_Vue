<template>
  <div>
    <div>
      <div>京东列表</div>
      <div>上面组件的和放大10倍：{{ processing }}</div>
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
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "TestList",
  data() {
    return { text: "" };
  },
  computed: {
    /**传统写法*/
    jdlist() {
      /**获取state中的参数*/
      return this.$store.state.jdlist;
    },
    /**借助 mapState 使用映射生成方法...代表生成在本类中)*/
    /**映射到this.$store.state:"方法名"  对象写法*/
    // ...mapState({sum:"sum",name:"name",address:"address"}),
    /**映射到this.$store.state  【方法名】参数必须和方法名一样  数组写法*/
    //  ...mapState(["jdlist"]),

    /**传统写法*/
    processing() {
      console.log("processin:", this.$store);
      return this.$store.getters.processing;
    },
     /**映射到this.$store.getters:"方法名"  对象写法*/
    // ...mapGetters({processin:"processin"}),
    /**映射到this.$store.getters  【方法名】参数必须和方法名一样  数组写法*/
    //  ...mapState(["processin"]),
  },
  methods: {
    /**添加SKU*/
    add_sku() {
      /**拆封成数组*/
      const array = this.text.split(",");
      /**调用mutations中的方法*/
      this.$store.commit("ADD_SKU", array);
    },
    start_request(action, value) {
      /**调用actions中的方法*/
      this.$store.dispatch("start_request");
    },
    terminate_request() {
      /**停止定时器（从state中获取）*/
      clearInterval(this.$store.state.isconsole);
    },
  },
};
</script>


<style scoped>
</style>