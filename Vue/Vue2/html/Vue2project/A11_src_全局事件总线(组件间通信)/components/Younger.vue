<template>
 <div>
    <div>{{msg}}</div>
    <button @click="getname">A11_src_全局事件总线(组件间通信)</button>
 </div>
  
</template>

<script>
export default {
    name:"Younger",
    data(){
        return {
           msg:"我是弟弟组件" ,
           user:{name:"周伟彬",age:"19"}
        }
    },
    methods:{
        getname(){
            //调用Elder组件的（getYoungername方法，参数）
            this.$bus.$emit("getYoungername",this.user)
        }
    },
  

}
</script>

<style>

</style>