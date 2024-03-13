<template>
  <div>
    <div>监控</div>
    <div class="someClass" :style="style">动态文字</div>
    <input type="text" />
  </div>
</template>

<script>
export default {
  name: "Monitor",
  data() {
    return {
      style: {
        color: "red", //样式
        fontSize: "50px", //样式
        backgroundColor: "Indigo", //多个单词使用驼峰模式
        opacity: 1, //样式
      },
    };
  },
  mounted() {
    console.log("监控组件加载完成" ,this);

  },
  beforeDestroy() {
    console.log("监控组件销毁完成");
  },
  //路由组件的生命周期激活时，
  activated() {
    console.log("Monitor组件激活了...");
    // 定时器（在vm中存放了一个定时器对象 ）
    this.timer = setInterval(() => {
      this.style.opacity -= 0.01;
      // console.log(this.data_style.opacity);
      if (this.style.opacity < 0) {
        this.style.opacity = 1;
      }
      console.log(this.style.opacity);
    }, 10);
  },
  //路由组件的生命周期失活时
  deactivated() {
    console.log("Monitor组件失活了...");
    clearInterval(this.timer);
  },

};
</script>

<style scoped>
/* 定义动画 */
@keyframes changeColor {
  0% {
    color: red;
  }
  50% {
    color: blue;
  }
  100% {
    color: green;
  }
}

/* 将动画应用到元素上 */
</style>