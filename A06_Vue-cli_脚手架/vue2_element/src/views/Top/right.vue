<template>
 <div>
  <el-row type="flex"  :gutter="20" >
    <el-col :span="10">
      <div  v-on:click="Login" >
         <button> 登录</button>
      </div>
    </el-col>
    <el-col :span="12">
      <div v-on:click="signout">
        <button>  退出登录</button>
      </div>
    </el-col>
  </el-row>
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