// Получаем кнопку и элемент, до которого нужно проскроллить страницу
var button = document.getElementById('myButton');
var targetElement = document.getElementById('body');

// Назначаем обработчик события на нажатие кнопки
function scrollToTarget() {

  var targetOffsetTop = targetElement.offsetTop;


  window.scrollTo({
    top: targetOffsetTop,
    behavior: 'smooth' 
  });
}

function news() {
    
    window.location = 'https://iz.ru/tag/kiberbezopasnost';
    return false;
    
}





function enter() {
    var ew1 = document.querySelector(".Body2")
    ew1.classList.remove("active")
    
}

function enter1() {
    var ew12 = document.querySelector(".Body2")
    ew12.classList.add("active")
    
}

function color() {
    var ew12 = document.querySelector(".pass1")
    ew12.classList.add("active")
    var ew112 = document.querySelector(".pass2")
    ew112.classList.add("active")
    var ew1112 = document.querySelector(".pass3")
    ew1112.classList.add("active")

    setTimeout(colorDelete, 500)
}

function color1() {
    var ew12 = document.querySelector(".pass1")
    ew12.classList.add("active1")
    var ew112 = document.querySelector(".pass2")
    ew112.classList.add("active1")
    var ew1112 = document.querySelector(".pass3")
    ew1112.classList.add("active1")
    var ew11112 = document.querySelector(".great")
    ew11112.classList.add("active")
}

function colorDelete() {
    var ew12 = document.querySelector(".pass1")
    ew12.classList.remove("active1")
    var ew112 = document.querySelector(".pass2")
    ew112.classList.remove("active1")
    var ew1112 = document.querySelector(".pass3")
    ew1112.classList.remove("active1")
    var ew122 = document.querySelector(".pass1")
    ew122.classList.remove("active")
    var ew11222 = document.querySelector(".pass2")
    ew11222.classList.remove("active")
    var ew1112222 = document.querySelector(".pass3")
    ew1112222.classList.remove("active")
}
