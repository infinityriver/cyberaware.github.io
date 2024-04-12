


function start2() {
    // var elementstart11 = document.getElementById('blockstart3');
    elementstart11.classList.add('active')
    var elementstart12 = document.getElementById('blockpassword04');
    elementstart12.classList.add('active')
    setTimeout(Printpassworddd, 500)
}



const text_passworddd = 'Вредоносное программное обеспечение (или вредоносный код) - это программы, созданные для нанесения вреда компьютеру или украденных данных. Оно может включать в себя различные типы угроз, такие как вирусы, черви, троянские программы, шпионское программное обеспечение и рекламное ПО (adware). Вредоносное программное обеспечение может проникать в компьютер через небезопасные веб-сайты, электронные письма с вредоносными вложениями или скачиванием недоверенных файлов из интернета.';
var index_passworddd = 0;
var printed_passworddd = false;

function Printpassworddd() {
    const element_passworddd = document.getElementById('inform011');
     // Убрать класс скрывающий элемент
    if (index_passworddd < text_passworddd.length) {
        element_passworddd.textContent += text_passworddd[index_passworddd]

        index_passworddd++

    
        setTimeout(Printpassworddd, 30)
    }else {
        printed_passworddd = true;

        setTimeout(Printpassworddd1, 100)

    }
}   

const text_passworddd1 = 'Признаки заражения компьютера вредоносным программным обеспечением включают в себя повышенное использование системных ресурсов, резкое замедление работы компьютера, появление всплывающих окон с рекламой или предупреждениями о вирусах, а также изменение домашней страницы браузера без вашего разрешения.';
var index_passworddd1 = 0;
var printed_passworddd1 = false;

function Printpassworddd1() {
    const element_passworddd1 = document.getElementById('inform0111');
     // Убрать класс скрывающий элемент
    if (index_passworddd1 < text_passworddd1.length) {
        element_passworddd1.textContent += text_passworddd1[index_passworddd1]

        index_passworddd1++

    
        setTimeout(Printpassworddd1, 30)
    }else {
        printed_passworddd1 = true;

        setTimeout(Printpassworddd2, 100)

    }
}   

const text_passworddd2 = 'Для защиты от вредоносного программного обеспечения, важно регулярно обновлять антивирусное программное обеспечение, избегать открытия подозрительных вложений в электронной почте или скачивания файлов из ненадежных источников. Также важно обязательно делать резервное копирование данных.';
var index_passworddd2 = 0;
var printed_passworddd2 = false;

function Printpassworddd2() {
    const element_passworddd2 = document.getElementById('inform0112');
     // Убрать класс скрывающий элемент
    if (index_passworddd2 < text_passworddd2.length) {
        element_passworddd2.textContent += text_passworddd2[index_passworddd2]

        index_passworddd2++

    
        setTimeout(Printpassworddd2, 30)
    }else {
        printed_passworddd2 = true;

    }
}   

