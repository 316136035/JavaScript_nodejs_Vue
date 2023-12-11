


const table_Element = document.querySelector('table');
//事件委托
table_Element.addEventListener('mouseover', function (e) {
  if (e.target.tagName.toLocaleLowerCase() == 'td') {
    e.target.style.background = "red"
  }
});
//事件委托
table_Element.addEventListener('mouseout', function (e) {
  if (e.target.tagName.toLocaleLowerCase() == 'td') {
    e.target.style.background = ""
  }
});