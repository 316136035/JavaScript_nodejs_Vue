<!-- 模版 -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
//暴露组件的变量和方法 等等  -->
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- scoped代表只能在当前组件使用的css样式 -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
