<template>
  <div class="div">
    <div>
      <img src="../assets/Vuex.png" alt="" />
    </div>
    <div>
      <label for="sum"></label>
      <!-- 通过vuex的核心store获取state仓库的数据 -->
      <div name="sum">当前求和值：{{ sum }}</div>
    </div>
    <div>
      <label for="processing"></label>
      <!-- 通过vuex的核心store调用getters中的方法获取数据 -->
      <div name="processing">值放大十倍：{{ processing }}</div>
    </div>
    <div>
      <label for="nameaddress"></label>
      <!-- 通过vuex的核心store调用getters中的方法获取数据 -->
      <div name="nameaddress">我是{{ name }}地址{{ address }}</div>
    </div>
    <div>
      <select v-model="selectsum">
        <option :value="0">请选择..</option>
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
        <option :value="4">4</option>
        <option :value="5">5</option>
      </select>
      <button @click="addition(selectsum)">加法</button>
      <button @click="subtraction(selectsum)">减法</button>
      <button @click="evenaddition(selectsum)">双数加法</button>
      <button @click="delayaddition(selectsum)">延迟加法</button>
    </div>
  </div>
</template> 

<script>
/**引入映射要用到的类*/ 
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "VueXCalculate",
  data() {
    return {
      selectsum: 1,
    };
  },
  computed: {
    /**传统写法*/
    // sum() {
    //   return this.$store.state.sum;
    // },
    // name() {
    //   return this.$store.state.name;
    // },
    // address() {
    //   return this.$store.state.address;
    // },

    /**借助 mapState 使用映射生成方法...代表生成在本类中)*/
    /**映射到this.$store.state:"方法名"  对象写法*/
    // ...mapState({sum:"sum",name:"name",address:"address"}),
    /**映射到this.$store.state  【方法名】参数必须和方法名一样  数组写法*/
    ...mapState(["sum", "name", "address"]),

    /**传统写法*/
    // processing() {
    //   return this.$store.getters.processing;
    // },

    /**借助 mapGetters 使用映射生成方法...代表生成在本类中)*/
    /**映射到this.$store.getters:"方法名"  对象写法*/
    // ...mapGetters({processing:"processing"}),
    /**映射到this.$store.getters 【方法名】参数必须和方法名一样  数组写法*/
    ...mapGetters(["processing"]),
  },
  methods: {
    // /* 加法 */
    // addition() {
    //   /**不经过actions行为直接触发mutations中的修改方法*/
    //   this.$store.commit("ADDITION", this.selectsum);
    // },
    // /* 减法 */
    // subtraction() {
    //   /**不经过actions行为直接触发mutations中的修改方法*/
    //   this.$store.commit("SUBTRACTION", this.selectsum);
    // },

    /**借助 mapMutations 使用映射生成方法...代表生成在本类中)*/
    /**映射到 this.$store.commit:"方法名"  对象写法*/
    ...mapMutations({ addition: "ADDITION", subtraction: "SUBTRACTION" }),
    /**映射到this.$store.commit【方法名】参数必须和方法名一样  数组写法*/
    // ...mapMutations(["ADDITION","SUBTRACTION"]),

    // /*判断加法 */
    // evenaddition() {
    //   /**经过actions行为再触发mutations中的修改方法*/
    //   this.$store.dispatch("evenaddition", this.selectsum);
    // },
    // /*延时加法 */
    // delayaddition() {
    //   /**经过actions行为再触发mutations中的修改方法*/
    //   this.$store.dispatch("delayaddition", this.selectsum);
    // },
    /**借助 mapActions 使用映射生成方法...代表生成在本类中)*/
    /**映射到 this.$store.dispatch:"方法名"  对象写法*/
    //  ...mapActions({ evenaddition: "evenaddition", delayaddition: "delayaddition" }),
    /**映射到this.$store.dispatch【方法名】参数必须和方法名一样  数组写法*/
    ...mapActions(["evenaddition", "delayaddition"]),
  },
};
</script>

<style scoped>
img {
  width: 800px;
}
</style>