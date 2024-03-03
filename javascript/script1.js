function checkInput() {
    var input = document.querySelector('.pass1').value;
    if (input === '7264985') {
      myFunction();
    }
}

function myFunction() {
    alert('Пройден первый этап! Отправляйтесь на следующую планету!');
    var elementstart2 = document.getElementById('blockstart1');
    elementstart2.classList.remove('active');


    document.querySelector('.pass1').disabled = true;

    var elementstart3 = document.querySelector('.pass1');
    elementstart3.classList.add('active');

    var elementstart11 = document.querySelector('.planet1');
    elementstart11.classList.add('play');
    // Добавьте код вашей функции здесь
}


function checkInput1() {
  var input = document.querySelector('.pass2').value;
  if (input === '1638256') {
    myFunction1();
  }
}

function myFunction1() {
  alert('Пройден второй этап! Отправляйтесь на следующую планету!');
  var elementstart2 = document.getElementById('blockstart2');
  elementstart2.classList.remove('active');


  document.querySelector('.pass2').disabled = true;

  var elementstart3 = document.querySelector('.pass2');
  elementstart3.classList.add('active');
  var elementstart11 = document.querySelector('.planet2');
  elementstart11.classList.add('play');
  // Добавьте код вашей функции здесь
}


function checkInput2() {
  var input = document.querySelector('.pass3').value;
  if (input === '9253815') {
    myFunction2();
  }
}

function myFunction2() {
  alert('Пройден третий-заключительный этап! Поздравляем!');
  var elementstart2 = document.getElementById('blockstart3');
  elementstart2.classList.remove('active');


  document.querySelector('.pass3').disabled = true;

  var elementstart3 = document.querySelector('.pass3');
  elementstart3.classList.add('active');
  // Добавьте код вашей функции здесь

  var elementstart4 = document.querySelector('.blockgame');
  elementstart4.classList.add('active');

  setTimeout(End, 1000)
}

function End() {
  var elementstart4 = document.querySelector('.blockgame');
  elementstart4.classList.add('active1');
}