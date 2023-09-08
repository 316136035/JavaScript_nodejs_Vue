<template>
  <div>
     <div>1111111111</div>
    <!-- 调用全局的过滤器 截取字符串 -->
    <div>{{ name | myfilter }}</div>
    <!-- 绑定自定义指令 自动获取焦点-->
    <input type="text" v-mydirective />
    <button @click="mymethodtecxt">点击调用插件中的方法</button>
  </div>
</template>

<script>
export default {
  name:"Student",
  data() {
    return {
      name: "华源茶叶特级正山小种红茶桂圆香送礼罐装500g",
    }
  },
  methods: {
    mymethodtecxt() {
      this.mymethod();
    },
  },
}
</script>

