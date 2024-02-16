{
    question: "Какую информацию не следует никогда делить в интернете?",
    options: ["Адрес дома", "Историю из поездки", "Финансовые данные, такие как номера кредитных карт или счетов"],
    correctAnswer: 3      
  },
  {
    question: "Что такое 'шифрование' в контексте безопасности данных?",
    options: ["Процесс преобразования данных в непонятную форму с целью защиты от несанкционированного доступа", "Способ увеличения объема данных на жестком диске", "Метод скрытия информации внутри изображений"],
    correctAnswer: 1
  }






  const text_password = '3te6wd9';
var index_password = 0;
var printed_password = false;

function PrintPass() {
    const element_password = document.getElementById('inform');
     // Убрать класс скрывающий элемент
    if (index_password < text_password.length) {
        element_password.textContent += text_password[index_password]

        index_password++

    
        setTimeout(PrintPassword, 100)
    }else {
        printed_password = true;

    }
}   