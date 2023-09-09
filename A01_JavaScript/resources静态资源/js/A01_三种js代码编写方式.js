// 在页面加载完毕后执行的代码
window.onload = function () {

  // 获取按钮元素
  var button = document.getElementById("external");
  // 添加点击事件处理程序
  button.addEventListener("click", function () {
    // 弹出对话框
    alert("外部js语发！");
  });
};