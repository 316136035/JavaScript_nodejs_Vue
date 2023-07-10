//生命构造函数
const Promise1 = function Promise(executor) {
    //添加属性定义状态码
    this.PromiseState = "pending"
    //添加属性定义回调数据
    this.PromiseResule = null
    //保存实例对象的this值
    const self = this
    //声明保存回调函数 异步
    this.callback = []
    //成功回调函数
    function resolve(data) {
        //判断状态码只能修改一次
        if (self.PromiseState !== "pending") { return }
        //设置成功回调状态
        self.PromiseState = "fulfilled"
        //设置成功回调数据
        self.PromiseResule = data
        // 遍历保存回调函数   是否有OnResolve这个回调函数 （有的话就调用这个回调函数） 异步
        self.callback.forEach((item) => {
            item.OnResolve(data)
        })

    }
    //失败回调函数
    function reject(data) {
        //判断状态码只能修改一次
        if (self.PromiseState !== "pending") { return }
        //设置失败回调状态
        self.PromiseState = "rejected"
        //设置失败回调数据
        self.PromiseResule = data
        // 遍历保存回调函数   是否有OnResolve这个回调函数 （有的话就调用这个回调函数） 异步
        self.callback.forEach((item) => {
            item.OnReject(data)
        })

    }

    try { //同步调用（执行器函数）
        executor(resolve, reject)
    } catch (e) {
        //修改PromiseState值为失败
        reject(e)
    }

    //回调
    Promise.prototype.then = function (OnResolve, OnReject) {
        //保存实例对象的this值
        const self = this
        console.log("Promise对象状态：", self.PromiseState)
        //返回一个Promise对象
        return new Promise((resolve, reject) => {

            //成功回调
            if (this.PromiseState === "fulfilled") {
                try {
                    //获取回调函数结果集
                    let resolveget = OnResolve(this.PromiseResule)
                    //判断回调函数对象是否为Promise对象实例
                    if (resolveget instanceof Promise) {
                        console.log("getresolve 对象：", resolveget)
                        //下面代码有问题error不执行
                        // resolveget.then(
                        //     (value) => {
                        //         console.log("Promise对象实例resolve:",resolveget)
                        //         resolve(value);
                        //     },
                        //     (error) => {
                        //         console.log("Promise对象实例:reject",error)
                        //         reject(error)
                        //     }
                        //   );
                        if (resolveget.PromiseState === "fulfilled" | resolveget.PromiseState === "resolved") { resolve(resolveget.PromiseResule) }
                        if (resolveget.PromiseState === "rejected") { reject(resolveget.PromiseResule) }
                    } else {
                        console.log("页面return函数结果集：", resolveget)
                        resolve(resolveget)
                    }
                } catch (e) {
                    reject(e)
                }

            }

            //失败回调
            if (this.PromiseState === "rejected") {

                try { 
                    const PromiseOnReject = OnReject(this.PromiseResule) 
                
                    if(PromiseOnReject instanceof Promise){
                        if (PromiseOnReject.PromiseState === "fulfilled" | PromiseOnReject.PromiseState === "resolved") { resolve(PromiseOnReject.PromiseResule) }
                        if (PromiseOnReject.PromiseState === "rejected") { reject(PromiseOnReject.PromiseResule) } 


                    }else{
                        resolve(PromiseOnReject)
                    }
                }
                catch (e) {reject(e) }




            }


            //处理异步的回调
            if (this.PromiseState === "pending") {
                //保存回调函数 异步
                this.callback.push(
                    {
                        //当状态修改后成功这个函数就会执行
                        OnResolve: function () {
                            try {
                                //获取回调函数结果集
                                let selfPromiseResule = OnResolve(self.PromiseResule)
                                console.log("获取回调函数结果集:", selfPromiseResule)
                                if (selfPromiseResule instanceof Promise) {
                                    //下面代码有问题error不执行
                                    // selfPromiseResule.then(
                                    // (value)=>{
                                    //     resolve(value)
                                    // },
                                    // (error)=>{
                                    //     reject(error)
                                    // },
                                    //    )
                                    if (selfPromiseResule.PromiseState === "fulfilled" | selfPromiseResule.PromiseState === "resolved") { resolve(selfPromiseResule.PromiseResule) }
                                    if (selfPromiseResule.PromiseState === "rejected") { reject(selfPromiseResule.PromiseResule) }
                                } else {
                                    resolve(selfPromiseResule)
                                }
                            } catch (e) {
                                reject(e)
                            }
                        },
                        //当状态修改后失败这个函数就会执行console.log("OnResolve")
                        OnReject: function () {
                            try {
                                //获取回调函数结果集
                                let selfPromiseOnReject = OnReject(self.PromiseResule)
                                console.log("获取回调函数结果集:", selfPromiseOnReject)
                                if (selfPromiseOnReject instanceof Promise) {
                                    //下面代码有问题error不执行
                                    // selfPromiseResule.then(
                                    // (value)=>{
                                    //     resolve(value)
                                    // },
                                    // (error)=>{
                                    //     reject(error)
                                    // },
                                    //    )
                                    if (selfPromiseOnReject.PromiseState === "fulfilled" | selfPromiseOnReject.PromiseState === "resolved") { resolve(selfPromiseOnReject.PromiseResule) }
                                    if (selfPromiseOnReject.PromiseState === "rejected") { reject(selfPromiseOnReject.PromiseResule) }
                                } else {
                                    resolve(selfPromiseOnReject)
                                }
                            } catch (e) {
                                reject(e)
                            }
                        },
                    }
                )
            }

        })

    }



}
//暴露
export default Promise1 