<template>
  <div class="container">
    <div>{{ table }}</div>
    <div>数组长度：{{sice}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    table() {return this.$store.state.top.table;},
    
    sice() {return this.$store.state.container.list.length; },
  },
  
};
</script>

<style>
</style>