<template>
  <div class="login">
    <div class="login-box">
      <div class="login-title">登录</div>
      <div class="login-input">
        <input type="text" placeholder="请输入用户名" v-model="username">
      </div>
      <div class="login-input">
        <input type="password" placeholder="请输入密码" v-model="password">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },

}
</script>

<style>

</style>