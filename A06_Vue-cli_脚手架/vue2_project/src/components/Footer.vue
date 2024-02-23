<!-- 模版 -->
<template>
  <!--_v-show显示和隐藏 当totalitem为大于0时显示，小于0时不显示  -->
  <div id="footer" v-show="totalitem">
    <!-- 显示全选框  :checked="isAllchecked"判断是否全部选中 -->
    <input
      type="checkbox"
      :checked="isAllchecked"
      v-on:change="selectAll_or_none"
    />
    <!-- 显示全部商品数量 -->
    <span>共{{ totalitem }}件商品/</span>
    <!-- 显示选中的商品数量 -->
    <span>选择了 {{ selecteditems }} 件商品</span>
  </div>
</template>

<script>
//暴露主组件的变量和方法 等等  -->
export default {
  name: "Footer",
  props: {
    list: Array,
    select_All_none: Function,
  },
  // 1.初次读取时就运行,2.computed方法有缓存3.所依赖的数据发生变化时缓存也会刷新缓存。
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
    //计算是否全部选中是的话就返回true 否则返回false
    isAllchecked() {
      //判断是否全部选中
      return this.selecteditems === this.totalitem && this.totalitem > 0;
    },
  },
  methods: {
    //定义方法改变全选状态的方法
    selectAll_or_none(e) {
      //调用父类方法处理全选或者全不选
      this.select_All_none(e.target.checked);
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