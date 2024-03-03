function start1() {
    var elementstart11 = document.getElementById('blockstart2');
    elementstart11.classList.add('active')
    var elementstart12 = document.getElementById('blockpassword03');
    elementstart12.classList.add('active')
    setTimeout(Printpasswordd, 500)
}

const text_passwordd = ' Фишинг - это вид мошенничества, при котором злоумышленники пытаются получить доступ к ваши личным данным, таким как пароли, номера кредитных карт, путем представления себя за надежные источники, такие как банки, интернет-провайдеры или онлайн-магазины. Это может быть осуществлено через электронную почту, социальные сети или текстовые сообщения.';
var index_passwordd = 0;
var printed_passwordd = false;

function Printpasswordd() {
    const element_passwordd = document.getElementById('inform0');
     // Убрать класс скрывающий элемент
    if (index_passwordd < text_passwordd.length) {
        element_passwordd.textContent += text_passwordd[index_passwordd]

        index_passwordd++

    
        setTimeout(Printpasswordd, 30)
    }else {
        printed_passwordd = true;

        setTimeout(Printpasswordd1, 100)

    }
}   

const text_passwordd1 = 'Небезопасные ссылки - это ссылки, которые могут привести к вредоносным веб-сайтам или загрузить вирусы на ваш компьютер. Это может произойти, если вы кликнете на ссылку, отправленную вам от ненадежного источника.';
var index_passwordd1 = 0;
var printed_passwordd1 = false;

function Printpasswordd1() {
    const element_passwordd1 = document.getElementById('inform01');
     // Убрать класс скрывающий элемент
    if (index_passwordd1 < text_passwordd1.length) {
        element_passwordd1.textContent += text_passwordd1[index_passwordd1]

        index_passwordd1++

    
        setTimeout(Printpasswordd1, 30)
    }else {
        printed_passwordd1 = true;

        setTimeout(Printpasswordd2, 100)

    }
}   

const text_passwordd2 = 'Для защиты от фишинга и небезопасных ссылок, важно быть внимательным и осторожным. Проверяйте адрес отправителя электронной почты и логотип компании, от которой пришло письмо. Обращайте внимание на URL-адрес ссылок, их длину, совпадение с описанием и наличие защищенного протокола "https". Не следует доверять сокращенным ссылкам без предварительной проверки.';
var index_passwordd2 = 0;
var printed_passwordd2 = false;

function Printpasswordd2() {
    const element_passwordd2 = document.getElementById('inform02');
     // Убрать класс скрывающий элемент
    if (index_passwordd2 < text_passwordd2.length) {
        element_passwordd2.textContent += text_passwordd2[index_passwordd2]

        index_passwordd2++

    
        setTimeout(Printpasswordd2, 30)
    }else {
        printed_passwordd2 = true;

    }
}   

