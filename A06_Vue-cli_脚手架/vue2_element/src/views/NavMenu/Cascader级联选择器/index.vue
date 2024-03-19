<template>
  <div class="block">
  <span class="demonstration">默认 click 触发子菜单</span>
  <el-cascader
    v-model="value"
    :options="options"
    @change="handleChange"></el-cascader>
</div>
</template>

<script>
export default {
  name: 'Cascader',

}
</script>

<style>
.block{
  margin:100px;
  background: red;
}

</style>