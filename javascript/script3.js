const questions2 = [
    {
      question2: "Что такое вредоносное программное обеспечение?",
      options2: ["Программы, которые улучшают производительность компьютера", " Программы для создания резервной копии данных", "Программы, которые наносят вред компьютеру и украденные данные"],
      correctAnswer2: 2
    },
    {
      question2: "Что включает в себя вредоносное программное обеспечение?",
      options2: ["Вирусы, черви, троянские программы, шпионское программное обеспечение", "Игры и развлекательные приложения", "Программы для защиты компьютера от вирусов"],
      correctAnswer2: 0
    },
    {
      question2: "Как вредоносное программное обеспечение может попасть на компьютер?",
      options2: ["Через безопасные и проверенные источники", "Путем открытия подозрительных вложений в электронной почте или скачивания из ненадежных источников", "Открывая только фотографии"],
      correctAnswer2: 1
    },
    {
      question2: "Какой может быть признак того, что компьютер заражен вредоносным программным обеспечением?",
      options2: ["Повышенная производительность и быстрая работа компьютера", "Резкое замедление работы компьютера, появление непонятных всплывающих окон", "Ничего не происходит"],
      correctAnswer2: 1
    },
    {
      question2: "Что делать, если вы обнаружили вредоносное программное обеспечение на своем компьютере?",
      options2: ["Игнорировать его, так как оно ни на что не влияет", "Продолжать пользоваться компьютером как обычно, так как это не так страшно", "Удалить его с помощью антивирусного программного обеспечения"],
      correctAnswer2: 2
    }
    // ... остальные вопросы
  ];
  
  let currentQuestion2 = 0;
  
  function displayQuestion2() {
    const questionElement2 = document.getElementById('question11');
    const optionsElement2 = document.getElementById('options11');
  
    questionElement2.textContent = questions2[currentQuestion2].question2;
  
    optionsElement2.innerHTML = '';
  
    questions2[currentQuestion2].options2.forEach((option, index) => {
      const button2 = document.createElement('button');
      button2.textContent = option;
      button2.onclick = () => checkAnswer2(index);
      optionsElement2.appendChild(button2);
    });
  }
  
  function checkAnswer2(selectedOption) {
    if (selectedOption === questions2[currentQuestion2].correctAnswer2) {
      // Логика при правильном ответе
        console.log('Правильный ответ!');
        currentQuestion2++;
    } else {
      // Логика при неправильном ответе
        console.log('Неправильный ответ!')

    }
  
    if (currentQuestion2 < questions2.length) {
      displayQuestion2();
    } else {
      // Логика после завершения теста
      console.log('Вопросы закончились');
      setTimeout(PrintPass02, 2000)
    }
  }
  
displayQuestion2()

function PrintPass02() {
  const text_password2 = 'gwf6tr7';
  var index_password2 = 0;
  var printed_password2 = false;
  
  function PrintPass002() {
      const element_password2 = document.getElementById('passwordPrint2');
       // Убрать класс скрывающий элемент
      if (index_password2 < text_password2.length) {
          element_password2.textContent += text_password2[index_password2]
  
          index_password2++
  
      
          setTimeout(PrintPass002, 200)
      }else {
          printed_password2 = true;
  
      }
  }   

  PrintPass002()
}
