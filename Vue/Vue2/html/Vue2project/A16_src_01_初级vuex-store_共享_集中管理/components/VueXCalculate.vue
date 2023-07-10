<template>
  <div class="div">
    <div>
      <img src="../assets/Vuex.png" alt="" />
    </div>
    <div>
      <label for="sum"></label>
      <!-- 通过vuex的核心store获取state仓库的数据 -->
      <div name="sum">当前求和值：{{ $store.state.sum }}</div>
    </div>
    <div>
      <label for="processing"></label>
       <!-- 通过vuex的核心store调用getters中的方法获取数据 -->
      <div name="processing">值放大十倍：{{$store.getters.processing}}</div>
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
      <button @click="addition">加法</button>
      <button @click="subtraction">减法</button>
      <button @click="evenaddition">双数加法</button>
      <button @click="delayaddition">延迟加法</button>
    </div>
  </div>
</template> 

<script>
export default {
  name: "VueXCalculate",
  data() {
    return {
      selectsum: 1,
    };
  },
  methods: {
    /* 加法 */
    addition() {
      /**不经过actions行为直接触发mutations中的修改方法*/ 
      this.$store.commit("ADDITION", this.selectsum);
    },
     /* 减法 */
    subtraction() {
         /**不经过actions行为直接触发mutations中的修改方法*/ 
      this.$store.commit("SUBTRACTION", this.selectsum);
    },
    /*判断加法 */
    evenaddition() {
         /**经过actions行为再触发mutations中的修改方法*/ 
      this.$store.dispatch("evenaddition", this.selectsum);
    },
   /*延时加法 */
    delayaddition() {
         /**经过actions行为再触发mutations中的修改方法*/ 
      this.$store.dispatch("delayaddition", this.selectsum);
    },
  },
};
</script>

<style scoped>
img {
  width: 800px;
}
</style>