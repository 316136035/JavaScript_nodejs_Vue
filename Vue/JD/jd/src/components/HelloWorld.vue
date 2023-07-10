<template>
  <div>
    <el-row>
      <el-button type="primary" @click="start">开始</el-button>
      <el-button type="danger" @click="stop">停止</el-button>
    
        <el-button @click="cs1">测试1</el-button>
    </el-row>
    <el-table
      :data="gettableData"
      border
      style="width: 100%"
      :row-class-name="tableRowClassName"
      :row-style="{ height: '10px' }"
    >
      <el-table-column prop="id" label="SKU" width="150"> </el-table-column>
      <el-table-column
        prop="wname"
        label="商品名称"
        width="500"
      ></el-table-column>
      <el-table-column prop="shopname" label="店铺名称" width="200">
      </el-table-column>
      <el-table-column prop="p" label="价格" width="90"> </el-table-column>
      <el-table-column prop="epp" label="企业价格" width="90">
      </el-table-column>
      <el-table-column prop="bestProList_value" label="活动"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
/**引入映射要用到的类*/
//import { mapState, mapGetters, mapMutations, mapActions, Store } from "vuex";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      token_eid: {
        token: "0000",
        eid: "000000000",
      },
    };
  },
  computed: {
    /**映射到js文件this.$store.getters("calculate模板名称",["mapGetters中的方法名"])数组写法  方法名和参数名必须一样*/
    ...mapGetters("VUEX", ["gettableData"]),
  },

  methods: {
    //这个方法是动态更新页面css
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },

    start() {
      /**调用actions中的方法*/
      this.$store.dispatch("VUEX/getmoney");
    },
    stop() {
      /**停止定时器（从state中获取）*/
      clearInterval(this.$store.state.VUEX.isconsole);
    },
   
      cs1() {
      let id = 100052341585;
      /**调用actions中的方法*/
      this.$store.dispatch("VUEX/get_Dynamic_encrypted_string");
    },
  },
  mounted() {

      this.$store.dispatch("VUEX/get_token_eid");
      this.$store.dispatch("VUEX/get_shopId_venderId");
   

  },
};
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>