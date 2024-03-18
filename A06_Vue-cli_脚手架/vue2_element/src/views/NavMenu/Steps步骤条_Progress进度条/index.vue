<template>
  <div>
    <div>
      <div>Steps 步骤条</div>
      <el-steps :active="active"> </el-steps>
      <el-steps :space="200" :active="active">
        <el-step
          :title="item.title"
          :description="item.description"
          v-for="(item, i) in spaceLists"
          :key="i"
        ></el-step>
      </el-steps>
      <el-button type="text"> </el-button>
      <el-button style="margin-top: 12px" @click="space">下一步</el-button>
    </div>
    <div>
      <div>Progress 进度条</div>
      <el-progress :percentage="percentage" ></el-progress>

    </div>
  </div>
</template>

<script>
import { TimePicker } from 'element-ui';

export default {
  name: "StepsProgress",
  data() {
    return {
      active: 0,
      spaceLists: [
        { title: "步骤1", description: "描述性文字1", status: "finish" },
        { title: "步骤2", description: "描述性文字2", status: "finish" },
        { title: "步骤3", description: "描述性文字3", status: "finish" },
        { title: "步骤4", description: "描述性文字4", status: "finish" },
        { title: "步骤5", description: "描述性文字5", status: "finish" },
      ],
      percentage:0
    };

  },
  methods: {
    space() {
      //判断是否到最后一项
      if (this.active++ == this.spaceLists.length - 1) {
        this.active = 0;
        this.Message()
      }
    },
    Message(){
      this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
  },
  },
  mounted() {
    setInterval(() => {
         if(this. percentage>=100){this. percentage=0};
        this. percentage++
        console.log(this. percentage);
      }, 200)
  },
};
</script>

<style>
</style>