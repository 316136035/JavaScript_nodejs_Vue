window.onload = function () {
  document.querySelector('body').addEventListener('mouseover',function(e){
    e.target.style.color = 'red';
  })
 
  document.querySelector('body').addEventListener('mouseout',function(e){
    e.target.style.color = '#11b90e';
  })

}