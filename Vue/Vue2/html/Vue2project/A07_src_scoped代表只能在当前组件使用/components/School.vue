<template>
  <div class="school">
    <div>{{ name }}</div>
    <div>{{ address }}</div>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "广州师范大学",
      address: "广州市天河区中山大道西293号",
    };
  },
  methods: {
    mymethodtecxt() {
      this.mymethod();
    },
  },
};
</script>
/* scoped 代表只能在当前组件使用 */
<style  scoped>
.school{
  background-color:blue
}
</style>>

