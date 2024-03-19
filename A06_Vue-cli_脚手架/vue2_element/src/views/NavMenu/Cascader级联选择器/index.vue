<template>
 
</template>

<script>
import axios from 'axios';
export default {
  name: 'Cascader',
  mothods: {
    
  },
  mounted() {
    axios.get('https://fts.jd.com/area/get?fid=4744').then(res => {
        console.log(res)
     
      })
    
  },

}
</script>

<style>
.block{
  margin:100px;
  background: red;
}

</style>