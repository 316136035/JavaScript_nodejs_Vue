/**这是一个混合js文件*/
//部分暴露对象
export const mixin1 = {
  methods: {
    sleep() {
      console.log("正在睡觉")
    }
  },
}
//部分暴露对象
export const data1 = {
  data() {
    return {
      msg: '欢迎来到淘神价...'
    }
  }
}