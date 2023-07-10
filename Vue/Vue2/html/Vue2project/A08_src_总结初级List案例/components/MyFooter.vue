<template>
  <div>
    <table>
      <div>
        是否全部选中/全选/全不部:
        <input type="checkbox" v-model="ischecked" />
      </div>
      <div>反选: <input type="checkbox" @change="reverseelection" /></div>
    </table>
    <table>
      <span>已选中{{ computedcheck }}</span>
      <span>全部 {{ computedall }}</span>
      <button @click="deletecheckbox">删除选中</button >
    </table>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["list", "myselectorunselect", "myreverseelection","mydeletecheckbox"],
  computed: {
    //这个方法是统计选中的 （computed带监听的）
    computedcheck() {
      /*      let i=0;
         this.list.forEach((item) => {
              if(item.check) i++
         });
          console.log(i)
           return   i */
      //reduce((计数器, 对象) => {return pre+(current.check?1:0); }, 0);
      return this.list.reduce((pre, current) => {
        return pre + (current.check ? 1 : 0);
      }, 0);
    },
    //这个方法是统计全部 （computed带监听的）
    computedall() {
      console.log("this.list.length", this.list.length);
      return this.list.length;
    },
    //这个全选或者全不选（computed带监听的）
    ischecked: {
      get() {
        //判断是否全部选中
        return this.computedcheck == this.computedall;
      },
      //valve为布尔值
      set(is) {
        //调用父组件传入方法
        this.myselectorunselect(is);
      },
    },
  },
  methods: {
    // 定义一个反选方法
    reverseelection() {
       //调用父组件传入方法
      this.myreverseelection();
    },
     //定义一个删除方法
   deletecheckbox(){
      //调用父组件传入方法
   this. mydeletecheckbox()
   }
  },

};
</script>

<style>
</style>