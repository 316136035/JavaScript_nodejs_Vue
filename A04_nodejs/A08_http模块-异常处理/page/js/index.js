  //获取全部td标签
  let tds=  document.querySelectorAll('td')
  //遍历td标签
  tds.forEach((item)=>{
      //td 标签绑定点击事件
    item.onclick=function(){
      //变更本td的样式
        this.style.background="red"
    }
  })
