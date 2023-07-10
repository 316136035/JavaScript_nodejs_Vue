<template>
  <div>
    <tr>
      <!--从$route中获取query参数 -->
      <td>{{ $route.query.id }}{{ $route.query.name }}</td>
    </tr>
  </div>
</template>

<script>
export default {
  name: "DepartmentChildren1Message",
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style>
</style>