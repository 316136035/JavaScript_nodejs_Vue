

const table_Element = document.querySelector('table');
table_Element.addEventListener('mouseover', function (e) {
  if (e.target.tagName.toLocaleLowerCase() == 'td') {
    e.target.style.background = "red"
  }
})
table_Element.addEventListener('mouseout', function (e) {
  if (e.target.tagName.toLocaleLowerCase() == 'td') {
    e.target.style.background = ""
  }
})