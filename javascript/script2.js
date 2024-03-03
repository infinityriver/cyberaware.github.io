const questions1 = [
    {
      question1: "Что такое фишинг?",
      options1: ["Вид рыбалки", "Мошенническая попытка получить чувствительные данные, такие как пароли и кредитные карты", " Вид спама"],
      correctAnswer1: 1
    },
    {
      question1: "Как можно защитить себя от фишинга?",
      options1: ["Проверяя адрес отправителя и логотип компании, от которой пришло письмо", "Нажимая на все ссылки в письмах", "Нажимая на все ссылки в письмах"],
      correctAnswer1: 0
    },
    {
      question1: "Какие признаки указывают на то, что ссылка может быть небезопасной?",
      options1: ["URL-адрес не соответствует описанию ссылки", "Длинный и сложный адрес", "Наличие знака 'https' в адресе"],
      correctAnswer1: 0
    },
    {
      question1: "Что такое 'сокращенные' ссылки и почему они могут быть опасными?",
      options1: ["Это ссылки, которые сокращаются для экономии места в письме", "Сокращенные ссылки всегда безопасны", "Сокращенные ссылки могут скрывать реальный адрес и вести на веб-сайты с вредоносным содержанием"],
      correctAnswer1: 2
    },
    {
      question1: "Как можно проверить надежность ссылки перед ее открытием?",
      options1: ["Просто нажать на нее и посмотреть, куда она ведет", "Проанализировать адрес и проверить его на сходство с официальным сайтом", "Довериться интуиции"],
      correctAnswer1: 1
    }
    // ... остальные вопросы
  ];
  
  let currentQuestion1 = 0;
  
  function displayQuestion1() {
    const questionElement1 = document.getElementById('question1');
    const optionsElement1 = document.getElementById('options1');
  
    questionElement1.textContent = questions1[currentQuestion1].question1;
  
    optionsElement1.innerHTML = '';
  
    questions1[currentQuestion1].options1.forEach((option, index) => {
      const button1 = document.createElement('button');
      button1.textContent = option;
      button1.onclick = () => checkAnswer1(index);
      optionsElement1.appendChild(button1);
    });
  }
  
  function checkAnswer1(selectedOption) {
    if (selectedOption === questions1[currentQuestion1].correctAnswer1) {
      // Логика при правильном ответе
        console.log('Правильный ответ!');
        currentQuestion1++;
    } else {
      // Логика при неправильном ответе
        console.log('Неправильный ответ!')

    }
  
    if (currentQuestion1 < questions1.length) {
      displayQuestion1();
    } else {
      // Логика после завершения теста
      console.log('Вопросы закончились');
      setTimeout(PrintPass01, 1000)
    }
  }
  
displayQuestion1()

function PrintPass01() {
  const text_password1 = '1638256';
  var index_password1 = 0;
  var printed_password1 = false;
  
  function PrintPass001() {
      const element_password1 = document.getElementById('passwordPrint1');
       // Убрать класс скрывающий элемент
      if (index_password1 < text_password1.length) {
          element_password1.textContent += text_password1[index_password1]
  
          index_password1++
  
      
          setTimeout(PrintPass001, 100)
      }else {
          printed_password1 = true;
  
      }
  }   

  PrintPass001()
}
