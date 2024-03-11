<!-- 模版 -->
<template>
 
       <!-- 顶部导航条 -->
       <div class="top">
        <!--版心  清楚浮动的影响-->
        <div class="container clear-both">
            <!-- 左侧欢迎词 -->
            <div class="top-welcome float-left">欢迎来到淘神价官网</div>
            <!-- 右侧导航区 -->
            <div class="navigation float-right">
                <!--导航区实例  -->
                <ul class="top-navigation-items">
                    <!-- 登录/注册 -->
                    <li class="login-register">
                        <a href="#">你好，请登录</a>
                        <a href="#">免费注册</a>
                    </li>
                   
                </ul>
            </div>

        </div>
    </div>
 
</template>

<script>
//暴露组件的变量和方法 等等  -->
export default {
  name: 'Head',
 
}
</script>

<!-- scoped代表只能在当前组件使用的css样式 -->
<style scoped>
/* --------------------基本css属性------------------ */
/* 左浮动 */
.float-left {
    float: left;
}

/* 右浮动 */
.float-right {
    float: right;
}

/* 清除浮动影响 */
.clear-both::after {
    content: "";
    /* 设置为块元素 */
    display: block;
    /* 清除浮动影响 */
    clear: both;
}

/* 版心 */
.container {
    /* 宽度 */
    width: 1190px;
    /* 居中 */
    margin: 0 auto;
    /* 背景颜色 */
    background-color: rgb(124, 172, 124);
}

.top {
    /* 背景颜色 */
    background-color: #e3e4e5;
    /* 边距 */
    border: 1px solid #ddd;
    /* 高度 */
    height: 40px;

}




.top-navigation-items{
    /*清除空白处 */
    font-size: 0;
}
/* 左侧欢迎词 */
.top-welcome {
    /* 字体大小 */
    font-size: 40px;
    /* 字体居中 */
    text-align: center;
    /* 行距 */
    line-height: 40px;
    /* 字符 粗体 */
    font-weight: bold;
    /*  字符颜色*/
    color: red;
}

/* 右侧导航区 */
.top-navigation-items li {
    /* 左浮动 */
    float: left;
   


}

/* 右侧导航区中的a标签 */
.top-navigation-items li >a {
     /* 字体大小 */
    font-size: 12px;
    /*字体类型  */
    font-family: Microsoft YaHei;
     /* 字体居中 */
    text-align: center;
    /* 行距 */
    line-height: 40px;
    /* 边框 */
    border-right: 1px solid #999;
    /* 内边框 */
    padding-right: 10px;
    padding-left:10px;
  

    
  
}

/* 右侧导航区中的第一个a标签 */
.login-register :first-child {
    /* 边框 */
    border-right: 0;
     /* 内边框 */
    padding-left: 0;
    padding-right: 0;
    
}

/* 右侧导航区中的最后一个a标签 */
.top-navigation-items li:last-child a {
      /* 边框 */
    border-right: 0;
     /* 内边框 */
    padding-right: 0;
}

</style>
