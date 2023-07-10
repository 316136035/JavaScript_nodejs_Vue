<template>
  <div class="student">
    <div>{{name}}</div>
       <div>{{age}}</div>
   
  </div>
</template>

<script>
 
export default {
   name:"Student",
  data() {
    return {
      name: "周先生",
       age:"19"
    }
  },
  methods: {
    mymethodtecxt() {
      this.mymethod();
    },
  },
}
</script>

/* scoped 代表只能在当前组件使用 */
<style scoped >
.student{
  background-color:rgb(0, 255, 76)
}

</style>