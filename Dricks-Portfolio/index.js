var btnBurger = document.getElementById('burg');
var burgCon = document.querySelector(".burger");
var btnClose = document.getElementById('close');

btnBurger.addEventListener("click", function(){
  burgCon.classList.add('burg-active');
});


btnClose.addEventListener("click", function(){
  burgCon.classList.toggle('burg-active');
});


function closeBurg(){
  burgCon.classList.toggle('burg-active');
}
