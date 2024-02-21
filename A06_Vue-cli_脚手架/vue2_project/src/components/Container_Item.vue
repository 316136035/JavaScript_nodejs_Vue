<!-- 模版 -->
<template>
<div>{{  item }}</div>
</template>
<script>
//暴露主组件的变量和方法 等等  -->
export default {
  name: 'Container_Item',
  data() {
    return {
      msg: '我是对象'
    }
  },
  props: {
    item: String
  }

}
</script>

<style scoped>

</style>