  import axios from "axios"
   

  //请求拦截器
    axios.interceptors.request.use(
      //成功
      (config) => {
        console.log("请求拦截器-->请求成功")
        //利用拦截器添加请求配置
        config.headers ={ "X-Custom-Header": "foobar", Cookies: "Cookie" }//自定义请求头（部分请求头参数要在跨越请求配置文件vue.config.js中配置）
      
        return config;
      },
      //失败
      (err) => {
          console.log("请求拦截器-->请求失败")
    return    Promise.reject(err);
      }
    );
    //响应拦截器
    axios.interceptors.response.use(
       //成功
      (response) => {
          console.log("拦响应截器-->回调成功")
        return response;
      },
      //失败
      (err) => {
          console.log("拦响应截器-->回调成功")
   return     Promise.reject(err);
      }
    );

    export default axios;