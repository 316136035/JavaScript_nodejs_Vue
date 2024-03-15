<template>
  <el-form
 
    status-icon
  
    ref="ruleForm"
  >
    <el-form-item label="账号" prop="username">
      <el-input
        type="text"
      
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
      
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
   
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  
methods: {
  submitForm(){
      this.$router.push('/')

  } ,
  mounted() {
    console.log(this.$route)
  },

}

}
 
</script>
<style>
</style>