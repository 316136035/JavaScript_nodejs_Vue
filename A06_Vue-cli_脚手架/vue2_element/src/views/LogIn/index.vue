<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="密码" prop="username">
    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="password">
    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
  </el-form-item>
 
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>

  </el-form-item>
</el-form>

</template>

<script>
export default {
    data() {
    
      var username = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号...'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var password = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } 
          callback();
        
      };
      return {
        ruleForm: {
          username: '',
          password: '',
         
        },
        //表单验证规则
        rules: {
          username: [
            { validator: username, trigger: 'blur' }
          ],
          password: [
            { validator: password, trigger: 'blur' }
          ],
         
        }
      };
    },
    methods: {
      submitForm() {
        this. $router.push('/')
      
      },
     
    }
  }
</script>