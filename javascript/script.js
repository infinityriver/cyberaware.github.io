const questions = [
    {
      question: " Почему использование сложных и уникальных паролей важно для безопасности онлайн-аккаунтов?",
      options: ["Уникальные пароли не имеют значения для безопасности", "Сложные и уникальные пароли делают взлом аккаунтов более затруднительным", "Сложные пароли трудно запомнить, поэтому их использование бессмысленно"],
      correctAnswer: 1
    },
    {
      question: "Какой пароль лучше использовать?",
      options: ["qwerty", "Tr0ub4dor&3", "123456"],
      correctAnswer: 1
    },
    {
      question: "Что представляет из себя надежный пароль?",
      options: ["Пароль из специальных символов, цифр, букв", "Пароль состоящий из личной информации", "Пароль состоящий из букв"],
      correctAnswer: 0
    },
    {
      question: "Какую информацию не следует никогда делить в интернете?",
      options: ["Адрес дома", "Историю из поездки", "Финансовые данные, такие как номера кредитных карт или счетов"],
      correctAnswer: 2
    },
    {
      question: "Какая длина пароля считается более безопасной?",
      options: ["4", "8", "12"],
      correctAnswer: 2
    },
    {
      question: "Что такое двухфакторная аутентификация?",
      options: ["Вход в аккаунт без использования пароля", "Система безопасности, использующая только один вид подтверждения личности", "Дополнительный этап проверки личности, помимо использования пароля"],
      correctAnswer: 2
    },
    {
      question: "Что делать, если вы подозреваете, что ваш пароль может быть скомпрометирован?",
      options: ["Использовать тот же пароль, но регулярно менять регистр букв", "Немедленно изменить пароль на новый, уникальный и надежный", "Продолжать использовать текущий пароль, так как это не так важно"],
      correctAnswer: 1
    }
    // ... остальные вопросы
  ];
  
  let currentQuestion = 0;
  
  function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
  
    questionElement.textContent = questions[currentQuestion].question;
  
    optionsElement.innerHTML = '';
  
    questions[currentQuestion].options.forEach((option, index) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.onclick = () => checkAnswer(index);
      optionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      // Логика при правильном ответе
        console.log('Правильный ответ!');
        currentQuestion++;
    } else {
      // Логика при неправильном ответе
        console.log('Неправильный ответ!')

    }
  
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      // Логика после завершения теста
      console.log('Вопросы закончились');
      setTimeout(PrintPass, 1000)
    }
  }
  
displayQuestion()

function PrintPass() {
  const text_password = '7264985';
  var index_password = 0;
  var printed_password = false;
  
  function PrintPass1() {
      const element_password = document.getElementById('passwordPrint');
       // Убрать класс скрывающий элемент
      if (index_password < text_password.length) {
          element_password.textContent += text_password[index_password]
  
          index_password++
  
      
          setTimeout(PrintPass1, 100)
      }else {
          printed_password = true;
  
      }
  }   

  PrintPass1()
}
