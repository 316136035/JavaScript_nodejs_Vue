<!-- 模版 -->
<template>
  <div id="footer">
    <div>
      <input type="checkbox" />
      <!-- 显示全部商品数量 -->
      <span>共{{ totalitem }}件商品/</span>
      <!-- 显示选中的商品数量 -->
      <span>选择了 {{ selecteditems }} 件商品</span>
    </div>
  </div>
</template>

<script>
//暴露主组件的变量和方法 等等  -->
export default {
  name: "Footer",
  props: {
    list: Array,
  },
  computed: {
    //计算全部商品数量
    totalitem() {
      return this.list.length;
    },
    //计算选中的商品数量
    selecteditems() {
      //reduce((计数器, 对象) => {return pre+(current.check?1:0); }, 开始值);
      return this.list.reduce((pre, item) => {
        return pre + (item.check ? 1 : 0);
      }, 0);
    },
  },
};
</script>

<style scoped>
#footer {
  /* 边框样式组合写法 (边框样式,边框宽度,边框颜色) （通用边框属性）*/
  border: solid 2px rgb(0, 97, 100);
}
</style>