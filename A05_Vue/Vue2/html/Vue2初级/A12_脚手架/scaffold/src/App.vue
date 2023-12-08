<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SchoolVue msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import SchoolVue from './components/SchoolVue.vue'

export default {
  name: 'App',
  components: {
   SchoolVue
  }
}
</script>

<style>

</style>
