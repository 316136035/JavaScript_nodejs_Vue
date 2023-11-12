// 引入模块
module.exports = {
  // 渲染页面
  render: function () {
      // 清空tbody
      tbodyElement.innerHTML = '';
      for (let i = 0; i < personnels.length; i++) {
          // 创建tr节点
          const trElement = document.createElement('tr');
          // 给td节点添加内容
          trElement.innerHTML = `
      <td>${i + 1}</td>
      <td>${personnels[i].id}</td>
      <td>${personnels[i].name}</td>
      <td>${personnels[i].age}</td>
      <td>${personnels[i].gender}</td>
      <td>${personnels[i].salary}</td>
      <td>${personnels[i].province}
      <td><a href="" data-id=${i}>删除</a></td>` //数组的索引作为删除的id
          // 将tr节点添加到tbody节点中
          tbodyElement.appendChild(trElement);
      }
  },
  // 监听表单提交事件
  Listensubmissions: function () {
      // 监听表单提交事件
      myformElement.addEventListener(`submit`, function (e) {
          // 阻止表单默认事件
          e.preventDefault();
          // 获取表单中带有属性name的全部元素
          const nameElements = document.querySelectorAll('.myform [name]');
          //遍历元素
          nameElements.forEach(item => {
              // 判断是否为空
              if (item.value === '') {
                  // 提示用户
                  return alert(`请填写完整的： ${item.getAttribute('placeholder')}`);

              } else if (nameElement.value == '' || ageElement.value == '' || genderElement.value == '' || salaryElement.value == '' || provinceElement.value == '') {
                  //成功提示用户
                  alert(`添加成功`);
              }
          })


      })
  },
  add: function () {
      // 创建对象
      const personnel = {
          id: personnels.length + 1,//获取数组的长度（作为学生编号）
          name: nameElement.value,//获取表单元素的值
          age: ageElement.value,//获取表单元素的值
          gender: document.querySelector(`[value='${genderElement.value}']`).text,//获取表单元素的文本值
          salary: salaryElement.value,//获取表单元素的值
          province: document.querySelector(`[value=${provinceElement.value}]`).text,//获取表单元素的文本值
      }
      // 向数组中添加对象
      personnels.push(personnel);
      console.log(personnels);
      //重置表单（清空表单）
      this.reset();
      // 渲染页面
      render();

  },
  //删除操作
  delete: function () {
      //删除操作
      tbodyElement.addEventListener('click', function (e) {
          // 阻止表单默认事件
          e.preventDefault();
          // 判断是否是a标签
          if (e.target.tagName === 'A') {
              // 1.获取被点击的a标签的dataset.id属性
              let id = e.target.dataset.id;
              // 2.删除数组中对应索引的元素
              personnels.splice(id, 1);
              // 3.重新渲染页面
              render()

          }
      })
  }


}