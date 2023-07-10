const loadFile = function (path) {

  //创建现代javascript中异步编程的基础对象（resolve成功回调，reject失败回调）
 const promise= new Promise((resolve, reject) => {
    // name为文件所在位置
    let xhr = new XMLHttpRequest()
    //判断网络协议是否为成功
    const okStatus = document.location.protocol === 'file:' ? 0 : 200
    //打开文件
    xhr.open('GET', path, false)
    xhr.overrideMimeType('text/html;charset=utf-8') //默认为utf-8
    xhr.send(null)  //// 什么也不传，为了兼容性传个null
    if (xhr.status === okStatus) {
      console.log("t为文本中的内容:"+xhr.responseText)  // xhr.responseText为文本中的内容
      resolve(xhr.responseText)
    } else {
      reject("路径出错:" +path)
    }
});


    return  promise

}

export default loadFile