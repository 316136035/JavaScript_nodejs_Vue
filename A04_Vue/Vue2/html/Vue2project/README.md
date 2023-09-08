## A01 脚手架文件结构
├── node_modules 

   ├── public

   │   ├── favicon.ico: 页签图标

   │   └── index.html: 主页面

   ├── src

   │   ├── assets: 存放静态资源

   │   │   └── logo.png

   │   │── component: 存放组件

   │   │   └── HelloWorld.vue

   │   │── App.vue: 汇总所有组件

   │   │── main.js: 入口文件

   ├── .gitignore: git版本管制忽略的配置

   ├── babel.config.js: babel的配置文件

   ├── package.json: 应用包配置文件 

   ├── README.md: 应用描述文件

   ├── package-lock.json：包版本控制文件
## A01 不同的vue版本
  1.vue.jsjvue.runtime.xxx.js的区别:(1).vue.js是完整版的Vue，包含: 核心功能+模板解析器(2).vue.runtime.xxx.js是运行版的Vue，只包含: 核心功能;没有模板解析器。
  2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容。
## A02 vue.config.js配置文件
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      // title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js'
 }
}
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
 lintOnSave:false //关闭语法检查
})
## A03 ref属性定义在元素和子组件中
1.被用来给元素或了组件注册引用信息 (id的替代者)
2.应用在htm1标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象 (vc)
3.使用方式:打标识: <h1 ref="xxx">.....</h1> 或 <School ref="xxx"></School>获取: this.$refs.xxx
## A04 props接受组件外部传参
 <!-- 创建组件  <Student name="刘备" age ="19" gender="男"/>-->
   /**声明接受数据三种写法*/
  //简单声明接受
    props: ["name", "age", "gender"],
  //声明接受的同时对数据进行类型限制
    props: {
      name: String, //限制为字符串
      age: Number, //限制为数字
      gender: String,
            },
  //声明接受的同时对数据进行类型限制和必要性的限制
   props: {
    name: { String, required: true }, //声明接受字符串，必填
    age: { Number, default: 100 },      //声明接受数字，非必填有默认值
    gender: { String, required: false },//声明接受字符串，非必填
          },
    备注: props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。
## A05 mixin(混合)
功能: 可以把多个组件共用的配置提取成一个混入对象
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
    },
      //回调函数
    data() {
        return {
            X: "X",
            Y: "YYYYY"
        }
    }
}

第二步使用混入，例如:
(1).全局混入: Vue.mixin(xxx)(2).局部混入: mixins:[xxx']
## A06_Vue的插件_静态方法定义 
定义plugins.js文件
//默认暴露
export default{
    install(Vue){
        console.log("Vue的构造者：",Vue)
        //过滤器
        // 定义全局过滤器（过滤器方法名，方法体）
        Vue.filter("myfilter", function (value) {
         .......
        })

        //自定义指令
        Vue.directive( "mydirective",{
           // 绑定span元素事就执行非成功写到页面
           bind(element, binding) {
          ...
        },
        //指令所元素被插入页面时
        inserted(element, binding) {
           .....
        },
        //指令所在的模板被重新解释时
        update(element, binding) {
           .....
        }
        }
       )
        //定义混入
       Vue.mixin({
        data() {
       ......
        }
       })
       //给Vue原型上添加一个方法:vm和vc也可以使用了
       Vue.prototype.mymethod=()=>{alert("method方法调用了..")}

    }
}
## A07_scoped代表只能在当前组件使用的css样式
## A08_总结初级List案例
1.组件化编码流程
  (1).拆分静态组件: 组件要按照功能点拆分，命名不要与html元素冲突
  (2).实现动态组件:考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用:
    (2)-1.一个组件在用: 放在组件自身即可
    (2)-2.一些组件在用: 放在他们共同的父组件上 (状态提升)(3).实现交互:从绑定事件开始
2.props适用于:
(1)父组件 ==>子组件 通信
(2).子组件 ==>父组件 通信(要求先给子一个函数)
3.使用v-model时要切记: v-model绑定的值不能是props传过来的值，因为props是不可以修改的!
4.props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。
## A09_LocalStorage和SessionStorage浏览器操作
LocalStorage
 windows.localStorage.setItem("key1", "value1");
 windows.localStorage.getItem("key1");
 windows.localStorage.removeItem("key1");
 windows.localStorage.clear();
SessionStorage
 windows.sessionStorage.setItem("key1", "value1");
 windows.sessionStorage.getItem("key1");
 windows.sessionStorage.removeItem("key1");
 windows.sessionStorage.clear();
## A10_组件的自定义事件  
1.一种组件间通信的方式，适用于: 子组件 ===>父组件
2.使用场景:A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件(事件的回调在A中)
3.绑定自定义事件:
  1.第一种方式，在父组件中:<Demo @atguigu="test"/> 或《Demo v-on;atguigu="test"/>
  2.第二种方式，在父组件中:mounted(){this.$refs.xxx.$on('atguigu',this.test)}
  3.若想让自定义事件只能触发一次，可以使用 once 修饰符，或 $once 方法
4.触发自定义事件: this.$emit('atguigu',数据)
5.解绑自定义事件 this.$off('atguigu')
6.组件上也可以绑定原生DOM事件，需要使用 native 修饰符
7.注意: 通过 this.refs.xxxSo(atguigu',回调) 绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向会出问题!
## A11_全局事件总线
 1.全局事件总线定义在main.js中
  //vm创建前
  beforeCreate() {
    //定义原型全局事件总线($bus就是当前的VM)
    Vue.prototype.$bus = this
  }

   2.全局事件总线的方法
   //组件加载后
  mounted(){
    //给全局事件总线添加一个方法（方法名，回调参数）
    this.$bus.$on("getYoungername",this.getname)
    
  },
  //销毁前
   beforeDestroy(){
    //销毁前把全局事件总线方法关闭
    this.$bus.$off("getYoungername")
   }
   3.使用全局事件总线的方法
    methods:{
        getname(){
            //调用Elder组件的（getYoungername方法，参数）
            this.$bus.$emit("getYoungername",this.user)
        }
    },
## A12_src_消息订阅与发布(3方包组件间通信)
  1.要安装pubsub-js包
    终端执行：npm i pubsub-js
  2.组件双向要引包：import pubsub from "pubsub-js";
  3.消息订阅
    this.pubsubID=pubsub.subscribe("getYoungername",this.getname)
  4 pubsub包发布
    pubsub.publish("getYoungername", this.user);
## $nextTick方法
  1.语法: this.$nextTick(回调函数)
  2.作用: 在下一次 DOM 更新结束后执行其指定的回调。
  3.什么时候用:当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行. 
## A13 Vue的动画
    1.过度动画
        1.template模板中：
        <div>过度动画</div>
        <button @click="isShow = !isShow">显示/隐藏</button>
             <!--transition-group 过渡效果多个元素 名字appear页面加载就使用动画  -->
           <transition-group name="transitionName" :appear="true">
           <!-- v-show控制DOM元素的显示和隐藏-->
             <div class="table1" v-show="!isShow" key=1>{{ table1 }} </div>
             <div class="table2" v-show="isShow" key=2>{{  table2 }}</div>
           </transition-group>
            </div>
         2.style样式中：
          .table1 {background-color: rgb(194, 16, 135);}
          .table2 {background-color: rgb(141, 194, 16);}
           /* 进入的起点, 离开的起点*/
           .transitionName-enter,.transitionName-leave-to{transform: translateX(-100%);}
         /*进入远行时，离开远行时**/ 
          .transitionName-enter-active,.transitionName-leave-active{transition: 2s linear}
         /* 离开的终点, 进入的终点 */
         .transitionName-leave ，transitionName-enter-to{transform: translateX(0%);}
    2.三方动画
        1.安装包：npm install animate.css
        2.引包：import "animate.css"
        3.使用animate的库
        <template>
        <div>
          <div>
            <div>animate动画库</div>
            <button @click="isShow = !isShow">显示/隐藏</button>
           <!--transition-group 过渡效果多个元素   name="animate的名字必填"  enter-active-class="进入的动画" leave-active-class="离开的动画""-->
           <transition-group  
            :appear="true" 
            name="animate__animated animate__bounce"
            enter-active-class="animate__backInDown"
            leave-active-class="animate__backOutDown"  
             >
            <!-- v-show控制DOM元素的显示和隐藏-->
             <div class="table1" v-show="!isShow" key=1>{{ table1 }} </div>
              <div class="table2" v-show="isShow" key=2>{{  table2 }}</div>
            </transition-group>
         </div>
        </div>
      </template>
## A14代理服务器和axios请求
  1.安装axios库 npm install save axios
  2.引入axios   import axios from "axios";
  3.在vue.config.js文件中配置代理服务器
        module.exports = defineConfig({
        lintOnSave:false, //关闭语法检查
        //开启代理服务器（方式一,只能处理一个请求地址）
         devServer: {
       //代理服务器请求真实服务器(实现请求为http://localhost:9090/user/selectUserList)
        proxy: 'http://localhost:9090' }

        //开启代理服务器（方式二 可以处理多个请求地址）
      vue文件中：   const url = `/getname/?appid=pc
    
          devServer: {
        //代理服务器请求真实服务器(实现请求为http://localhost:9090/user/selectUserList)
        //请求地址/getList1为找到这个代理 
        //target 真实服务器地址
        //pathRewrite 正则表达式去除/getList1
        // ws:true 支持wedsocket
        //changeOrigin:true 用于控制请求头中的host值
        proxy: {
               "/getList1":{
                target:"http://localhost:9090",
                 pathRewrite:{"^/getList1":""},
                  ws:true,
                 changeOrigin:true
     },
   
  }
 }
## A15插槽 slot
  使用方式一
    父组件中：
        <!-- 创建模块 定义属性 -->
    <category title="美食">
      <!--template标签不会显示在页面 使用插槽 slot="slot1" 接受插槽传参slot-scope={foods}（必须使用template标签） -->
      <template  slot="slot1">
         <ul>
            <!-- 遍历 -->
        <li v-for="(item, i) in foods" :key="i">{{ item }}</li>
        </ul>
       </template>
    </category>
    子组件中：
         <!-- 定义一个插槽  :foods=foods传参给使用者-->
    <slot name="slot1"> 我是一个插槽slot1，当使用者没有传递具体结构时，我会出现</slot>
   
    使用方式二  插槽slot 传参
       父组件中：
   <!-- 创建模块 定义属性 -->
   <category title="美食">
      <!--template标签不会显示在页面 使用插槽 slot="slot1" 接受插槽传参slot-scope={foods}（必须使用template标签） -->
      <template  slot="slot1" slot-scope={foods}>
         <ul>
            <!-- 遍历 -->
        <li v-for="(item, i) in foods" :key="i">{{ item }}</li>
        </ul>
       </template>
    </category>
            子组件中：
           <!-- 定义一个插槽  :foods=foods传参给使用者-->
    <slot name="slot1" :foods=foods>我是一个插槽slot1，当使用者没有传递具体结构时，我会出现</slot>

## A16 Vuex (优点——共享_集中管理_模块管理)
1. Vuex模块管理搭建
   1. 命令安装npm i vuex@3
   2. 在src文件中创建store文件夹--分类创建index.js(主模块文件)---模块文件A.js---模块文件B.js......
   3. index.js文件：
                  import Vue from 'vue' // 引入vue.js，脚手架自动引入在node_modules中
                  import Vuex from 'vuex'  // 引入vuex
                  import 模块文件A from './模块文件A.js'    //引入模块文件A
                  import 模块文件B  from './模块文件B.js'       //引入模块文件B        
                  Vue.use(Vuex) //使用Vuex  响应式共享的数据
                  //创建并暴露store
                  export default new Vuex.Store({
                   /**使用多个模块*/
                  modules:{ 模块文件A,模块文件B  }
                  })
   4. 模块文件A.js:   （A/B一样这样创建）
                  import Vue from 'vue' // 引入vue.js，脚手架自动引入在node_modules中
                  import Vuex from 'vuex'  // 引入vuex
                  Vue.use(Vuex) //使用Vuex  响应式共享的数据
                  import axios from "axios"; //引入axios请求
                  axios.defaults.withCredentials = true; //配置可以使用cookies请求
                  /*创建并暴露计算相关模块**/ 
                  export default   {
                      namespaced: true,// 开启命名空间
                      //准备actions对象—统一响应组件中用户的动作(后台代码/异步请求)
                      actions: {
                          /**判断修改方法（精简的核心文件store，组件传参）*/
                         自定义方法名(action, value) {}
                       },
                      //准备mutations对象—统一修改state中的数据（方法名请使用大写）
                      mutations: {
                          /**当有人触发addition方法就进行修改*/
                         自定义方法名使用大写(mutation, value) {},
                         },
                      //准备state对象——保存具体的数据（仓库/共享数据）
                      state: {sum: 0,},
                      //准备getters对象—统一加工state中的数据（等于computed 但是共享的）
                      getters: {
	                  自定义方法名(state) {return state.sum * 10 }
                      }
                  }
   5. 使用整个模块main.js：
                        import store from './store/index.js'
                        render: h => h(App),store,}).$mount('#app')
2. vue文件中使用Vuex的模块 ：
 /**引入模板映射要用到的类*/
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    /**========================================================================================================================*/
    // /**模板中传统写法（读取模板中的state参数）*/
    // sum() {
    // /**获取calculate模板中的state中的参数*/
    //   return this.$store.state.calculate.sum;
    // },
    /**模板中借助 mapState 使用映射生成方法...代表生成在本类中)*/
    /**映射到this.$store.state("calculate模板名称",{"方法名:"参数名","方法名:"参数名})  对象写法*/
    // ...mapState("calculate",{sum:"sum",name:"name",address:"address"}),
    /**映射到this.$store.state("calculate模板名称",[方法名1,方法名2,方法名3])  数据写法  方法名和参数名必须一样*/
    ...mapState("calculate", ["sum", "name", "address"]),
    /**========================================================================================================================*/
    // /**模板中传统写法（调用getters中的参数方法）*/
    // processing() {
    //     /**调用getters中的参数方法*/
    //   return this.$store.getters["calculate/processing"];
    // },
    /**模板中借助 mapGetters 使用映射生成方法...代表生成在本类中)*/
    /**映射到this.$store.getters("calculate模板名称",{方法名:"mapGetters中的方法名"})*/
    // ...mapGetters("calculate", { processing: "processing" }),
    /**映射到this.$store.getters("calculate模板名称",["mapGetters中的方法名"])数组写法  方法名和参数名必须一样*/
    ...mapGetters("calculate", ["processing"]),
    /**========================================================================================================================*/
    // /**模板中传统写法（读取模板中的state参数）*/
    // jdlist() {
    //     /**获取jd模板中的state中的参数*/
    //   return this.$store.state.模板名称B.jdlist;
    //  },
    /**映射到this.$store.getters("模板名称B",{"方法名:"参数名"})  对象写法*/
    ...mapState("模板名称B", { jdlist: "jdlist" }),
    /**映射到this.$store.getters("jd模板名称B",{"方法名:"参数名"})  数组写法     方法名和参数名必须一样*/
    ...mapState("模板名称B", ["jdlist"]),
    /**========================================================================================================================*/
  },
  methods: {
    /**========================================================================================================================*/
    //  /**模板中传统写法（加法）*/
    // addition() {
    //   /**不经过actions行为直接触发mutations中的修改方法（路径，参数）*/
    //   this.$store.commit("calculate/ADDITION", this.selectsum);
    // },
    // /* 模板中传统写法(减法) */
    // subtraction() {
    //   /**不经过actions行为直接触发mutations中的修改方法（路径，参数）*/
    //   this.$store.commit("calculate/SUBTRACTION", this.selectsum);
    // },
    /* 模板中加法和减法 */
    /**模板中借助 mapMutations 使用映射生成方法...代表生成在本类中)*/
    // /**映射到 this.$store.commit("calculate模板名称",{方法名1:模板中的方法名1,方法名2:模板中的方法名2})   对象写法*/
    // ...mapMutations("calculate", { addition: "ADDITION",subtraction: "SUBTRACTION",}),
    /**映射到this.$store.commi"calculate模板名称",[方法名1,方法名2]  数组写法    方法名和参数名必须一样*/
    ...mapMutations("calculate", ["ADDITION", "SUBTRACTION"]),
    /**========================================================================================================================*/
    //  /**模板中传统写法（判断加法）*/
    // evenaddition() {
    //   /**经过actions行为再触发mutations中的修改方法*/
    //   this.$store.dispatch("calculate/evenaddition", this.selectsum);
    // },
    //   /**模板中传统写法（延时加法）*/
    // delayaddition() {
    //   /**经过actions行为再触发mutations中的修改方法*/
    //   this.$store.dispatch("calculate/delayaddition", this.selectsum);
    // },
    /**模板中借助 mapActions 使用映射生成方法...代表生成在本类中)*/
    /**映射到 this.$store.dispatch("calculate模板名称",{方法名1:模板中的方法名1,方法名2:模板中的方法名2})(参数在标签参)*/
    // ...mapActions("calculate", {evenaddition: "evenaddition",delayaddition: "delayaddition", }),
    /**映射到this.$store.dispatch("calculate模板名称",[方法名1，方法名2]) 数组写法  方法名和参数名必须一样*/
    ...mapActions("calculate", ["evenaddition", "delayaddition"]),
  },
  /*页面加载后运行*/
  mounted() {
    console.log(this.$store);
  },
};

                         
                 




                  
     
      



 


  

