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
      <button @click="ADDITION(selectsum)">加法</button>
      <button @click="SUBTRACTION(selectsum)">减法</button>
      <button @click="evenaddition(selectsum)">双数加法</button>
      <button @click="delayaddition(selectsum)">延迟加法</button>
    </div>
    <div class="jslistlength">京东集合长度：{{ jdlist.length }}</div>
  </div>
</template> 

<script>
/**引入模板映射要用到的类*/
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "VueXCalculate",
  data() {
    return {
      selectsum: -1,
    };
  },
  computed: {
    /**========================================================================================================================*/
    // /**模板中传统写法（读取模板中的state参数）*/
    // sum() {
    // /**获取calculate模板中的state中的参数*/
    //   return this.$store.state.calculate.sum;
    // },
    // name() {
    // /**获取calculate模板中的state中的参数*/
    //   return this.$store.state.calculate.name;
    // },
    // address() {
    //  /**获取calculate模板中的state中的参数*/
    //   return this.$store.state.calculate.address;
    // },
    /**模板中借助 mapState 使用映射生成方法...代表生成在本类中)*/
    /**映射到this.$store.state("calculate模板名称",{"方法名:"参数名","方法名:"参数名})  对象写法*/
    // ...mapState("calculate",{sum:"sum",name:"name",address:"address"}),
    /**映射到this.$store.state("calculate模板名称",[方法名1,方法名2,方法名3])  数据写法  方法名和参数名必须一样*/
    ...mapState("calculate", ["sum", "name", "address"]),
    /**========================================================================================================================*/
    // /**模板中传统写法（调用getters中的参数方法）*/
    // processing() {
    //     /**调用getters中的参数方法*/
    //   return this.$store.getters["calculate/processing"];
    // },
    /**模板中借助 mapGetters 使用映射生成方法...代表生成在本类中)*/
    /**映射到this.$store.getters("calculate模板名称",{方法名:"mapGetters中的方法名"})*/
    // ...mapGetters("calculate", { processing: "processing" }),
    /**映射到this.$store.getters("calculate模板名称",["mapGetters中的方法名"])数组写法  方法名和参数名必须一样*/
    ...mapGetters("calculate", ["processing"]),
    /**========================================================================================================================*/
    // /**模板中传统写法（读取模板中的state参数）*/
    // jdlist() {
    //     /**获取jd模板中的state中的参数*/
    //   return this.$store.state.jd.jdlist;
    //  },
    /**映射到this.$store.getters("jd模板名称",{"方法名:"参数名"})  对象写法*/
    ...mapState("jd", { jdlist: "jdlist" }),
    /**映射到this.$store.getters("jd模板名称",{"方法名:"参数名"})  数组写法     方法名和参数名必须一样*/
    ...mapState("jd", ["jdlist"]),
    /**========================================================================================================================*/
  },
  methods: {
    /**========================================================================================================================*/
    //  /**模板中传统写法（加法）*/
    // addition() {
    //   /**不经过actions行为直接触发mutations中的修改方法（路径，参数）*/
    //   this.$store.commit("calculate/ADDITION", this.selectsum);
    // },
    // /* 模板中传统写法(减法) */
    // subtraction() {
    //   /**不经过actions行为直接触发mutations中的修改方法（路径，参数）*/
    //   this.$store.commit("calculate/SUBTRACTION", this.selectsum);
    // },
    /* 模板中加法和减法 */
    /**模板中借助 mapMutations 使用映射生成方法...代表生成在本类中)*/
    // /**映射到 this.$store.commit("calculate模板名称",{方法名1:模板中的方法名1,方法名2:模板中的方法名2})   对象写法*/
    // ...mapMutations("calculate", { addition: "ADDITION",subtraction: "SUBTRACTION",}),
    /**映射到this.$store.commi"calculate模板名称",[方法名1,方法名2]  数组写法    方法名和参数名必须一样*/
    ...mapMutations("calculate", ["ADDITION", "SUBTRACTION"]),
    /**========================================================================================================================*/
    //  /**模板中传统写法（判断加法）*/
    // evenaddition() {
    //   /**经过actions行为再触发mutations中的修改方法*/
    //   this.$store.dispatch("calculate/evenaddition", this.selectsum);
    // },
    //   /**模板中传统写法（延时加法）*/
    // delayaddition() {
    //   /**经过actions行为再触发mutations中的修改方法*/
    //   this.$store.dispatch("calculate/delayaddition", this.selectsum);
    // },
    /**模板中借助 mapActions 使用映射生成方法...代表生成在本类中)*/
    /**映射到 this.$store.dispatch("calculate模板名称",{方法名1:模板中的方法名1,方法名2:模板中的方法名2})(参数在标签参)*/
    // ...mapActions("calculate", {evenaddition: "evenaddition",delayaddition: "delayaddition", }),
    /**映射到this.$store.dispatch("calculate模板名称",[方法名1，方法名2]) 数组写法  方法名和参数名必须一样*/
    ...mapActions("calculate", ["evenaddition", "delayaddition"]),
  },
  /*页面加载后运行*/
  mounted() {
    console.log(this.$store);
  },
};
</script>

<style scoped>
img {
  width: 800px;
}
.jslistlength {
  background-color: aqua;
}
</style>