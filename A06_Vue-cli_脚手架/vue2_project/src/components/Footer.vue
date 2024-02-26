<!-- 模版 -->
<template>
  <!--_v-show显示和隐藏 当totalitem为大于0时显示，小于0时不显示  -->
  <div id="footer" v-show="totalitem">
    <!-- 显示全选框  :checked="isAllchecked"判断是否全部选中 -->
    <input
      type="checkbox"
       v-model="isAllchecked"
     
    />
    <!-- 显示全部商品数量 -->
    <span>共{{ totalitem }}件商品/</span>
    <!-- 显示选中的商品数量 -->
    <span>选择了 {{ selecteditems }} 件商品</span>
    <button v-on:click="deletecheckboxall">删除选中</button >
  </div>
</template>

<script>
//暴露主组件的变量和方法 等等  -->
export default {
  name: "Footer",
  props: {
    list: Array,
    select_All_none: Function,
    DeleteCheckboxAll: Function,
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
    //计算是否全部选中并处理全选和全不选
    isAllchecked: {
      //当有人读取 isAllchecked时，get就会被调用，且返回值就作为isAllchecked的值 
      get(){
         //计算是否全部选中是的话就返回true 否则返回false
      return this.selecteditems === this.totalitem && this.totalitem > 0;
      },
       //set有什么作用?当有人写入user_computed时，set就会被调用，且将写入的值作为参数传入
      set(check){
             //调用父类方法处理全选或者全不选
      this.select_All_none(check);
      }
    },
   
  },
  methods: {
      deletecheckboxall() {
        //调用父组件的方法
        this.DeleteCheckboxAll();
      },
    },

};
</script>

<style scoped>
#footer {
  /* 边框样式组合写法 (边框样式,边框宽度,边框颜色) （通用边框属性）*/
  border: solid 2px rgb(0, 97, 100);
}
button {
  position: absolute;
  right: 0; /* 靠近容器右侧 */
}
</style>