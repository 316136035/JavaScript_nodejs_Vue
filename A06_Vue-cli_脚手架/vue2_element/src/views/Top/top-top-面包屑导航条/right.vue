<template>

  <div  class="float-right">
  <el-button  round size="mini">登录</el-button>
  <el-button  round size =mini>退出</el-button>
  </div>
 

</template>

<script>
export default {
  methods: {
    Login() {
       this.$router.push("/login");
    },
    signout(){
      this.$router.push("/login");
    }
  },

}
</script>

<style>

</style>