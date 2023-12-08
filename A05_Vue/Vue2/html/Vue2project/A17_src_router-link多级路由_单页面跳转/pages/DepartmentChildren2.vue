<template>
   <div>
    <ul>
   <li v-for="item in Children2" :key="item.id">
        {{item}}
      </li>
    </ul>
  </div>
  
</template>


<script>
export default {
    data(){return{
      Children2:[{a:"A"},{b:"B"},{c:"C"},{d:"D"},{e:"E"}]
    }},
    name:"DepartmentChildren2"


}
</script>

<style>

</style>