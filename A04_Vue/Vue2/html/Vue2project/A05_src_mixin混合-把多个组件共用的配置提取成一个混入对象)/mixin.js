// export 分别暴露 混合mixin1  （要在模块中引入并使用）
export const mixin1 = {
    //配置混合方法
    methods: {
        showname() {
            alert(this.name)
        }
    },
      //配置默认方法
    mounted() {
        console.log(this)
    }
}

// export 分别暴露 混合mixin2  （要在模块中引入并使用）
export const mixin2 = {
      //回调函数
    data() {
        return {
            X: "X",
            Y: "YYYYY"
        }
    }

}