<template>
   <div>
     <ul>
      <!--从$route中获取query参数 -->
     <li>{{$route.query.id}}</li>
      <li>{{$route.query.name}}</li>

 </ul>
   </div>

  
</template>

<script>
export default {
        name:"DepartmentChildren1Message",
        mounted(){
            console.log(this.$route)
          
        }
}
</script>

<style>

</style>