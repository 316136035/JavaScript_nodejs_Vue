<template>
  <div>
    <!-- 输入框 -->
    <input v-model="text" type="text" class="text" placeholder="sku,sku,sku" />
    <!-- 按钮 -->
    <button @click="getJdLiat">点击</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "testHeader",

  data() {
    return {
      text: "",
    };
  },
  methods: {
    //按的方法
    getJdLiat() {
      /**调用事件总线的方法（方法名，isFirst：“是否显示欢迎.，isLoading："是否加载中"，errMsg："错误信息， list:"对象"）*/
      this.$bus.$emit("getJdList", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        list: [],
      });
      axios({
        // 请求方式
        method: "GET",
        //地址
        url: `https://api.m.jd.com/?appid=item-v3&functionId=pctradesoa_getprice&client=pc&clientVersion=1.0.0&t=1679567276417&body={"area":"1_72_55653_0","pin":"伟彬672","fields":"11100000","skuIds":"${this.text}","source":"pc-item"}&type=epp`,
      })
        .then((response) => {
          /**调用事件总线的方法（方法名，isFirst：“是否显示欢迎.，isLoading："是否加载中"，errMsg："错误信息， list:"对象"）*/
          this.$bus.$emit("getJdList", {
            isFirst: false,
            isLoading: false,
            errMsg: "",
            list: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
          /**调用事件总线的方法（方法名，isFirst：“是否显示欢迎.，isLoading："是否加载中"，errMsg："错误信息， list:"对象"）*/
          this.$bus.$emit("getJdList", {
            isFirst: false,
            isLoading: false,
            errMsg: error.message,
            list: [],
          });
        });
    },
  },
};
</script>

<style scoped>
.text {
  width: 600px;
}
</style>