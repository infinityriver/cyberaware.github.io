function vcontacte() {
    window.location = 'https://vk.com/mr_bestt';
    return false;
}

function telegram() {
    window.location = 'https://t.me/infinityriv';
    return false;
}

var count = 0;

function play(){
    var ew = document.querySelector(".header")
    ew.classList.add("active")
    setTimeout(light, 300)
    setTimeout(PrintText_2, 300)

    setTimeout(PlayText, 1000)
}

function light() {
    var sercle = document.querySelector(".cercle")
    sercle.classList.add("active")
    var sercle1 = document.querySelector(".cercle1")
    sercle1.classList.add("active")
    var sercle2 = document.querySelector(".cercle2")
    sercle2.classList.add("active")
    var sercle5 = document.querySelector(".cercle5")
    sercle5.classList.add("active")
    var sercle6 = document.querySelector(".cercle6")
    sercle6.classList.add("active")
    var sercle3 = document.querySelector(".cartDev")
    sercle3.classList.add("active")
    var sercle7 = document.querySelector(".amphora9")
    sercle7.classList.add("active")


    setTimeout(light1, 300)
}

function light1() {
    var sercle = document.querySelector(".cercle")
    sercle.classList.remove("active")
    var sercle1 = document.querySelector(".cercle1")
    sercle1.classList.remove("active")
    var sercle2 = document.querySelector(".cercle2")
    sercle2.classList.remove("active")
    var sercle3 = document.querySelector(".cartDev")
    sercle3.classList.remove("active")
    var sercle5 = document.querySelector(".cercle5")
    sercle5.classList.remove("active")
    var sercle6 = document.querySelector(".cercle6")
    sercle6.classList.remove("active")
    var sercle7 = document.querySelector(".amphora9")
    sercle7.classList.remove("active")

    if (count<5) {
        setTimeout(light, 300)
        count++
    }else {
        setTimeout(light2, 300)
    }
}

function light2() {
    var sercle = document.querySelector(".cercle")
    sercle.classList.add("activeEnd")
    var sercle1 = document.querySelector(".cercle1")
    sercle1.classList.add("activeEnd")
    var sercle2 = document.querySelector(".cercle2")
    sercle2.classList.add("activeEnd")
    var sercle3 = document.querySelector(".cartDev")
    sercle3.classList.add("activeEnd")
    var sercle5 = document.querySelector(".cercle5")
    sercle5.classList.add("activeEnd")
    var sercle6 = document.querySelector(".cercle6")
    sercle6.classList.add("activeEnd")
    var sercle7 = document.querySelector(".amphora9")
    sercle7.classList.add("activeEnd")

}

function right() {
    var block = document.querySelector(".block3")
    block.classList.add("active")
    var block1 = document.getElementById("block2")
    block1.classList.add("active")

    setTimeout(rightStop, 3000)
}

function rightStop() {
    var block = document.querySelector(".block3")
    block.classList.remove("active")

    setTimeout(rightStop1, 1000)
}

function rightStop1() {
    var block1 = document.getElementById("block2")
    block1.classList.remove("active")

}

function cards1() {
    var card = document.getElementById("card")
    card.classList.remove("card")
}

const text_1 = 'Я бы хотел, чтобы мы построили такой мир, в котором могли бы контролировать свою информацию, владеть ею.';
var index_1 = 0;
var printed_1 = false;

function AddText() {
    setTimeout(AddText1, 700)
}

function AddText1() {
    var element_11 = document.getElementById('devtext');
    element_11.classList.remove('active');

    setTimeout(PrintText_1, 600)
}

function PrintText_1() {
    const element_1 = document.getElementById('devtext');
    if (index_1 < text_1.length) {
        element_1.textContent += text_1[index_1]

        index_1++

    
        setTimeout(PrintText_1, 100)
    }else {
        printed_1 = true;

    }
}   

function DeleteText() {
    var elementEnd_1 = document.getElementById('devtext');
    elementEnd_1.classList.add('active');
}





const text_2 = 'Именно Всемирная паутина дает возможность преступникам действовать анонимно. Поэтому небезопасное поведение в сети Интернет может нанести вред и вам, и вашим родным и близким людям. Обезопасить себя не так уж и трудно – достаточно серьезно отнестись к проблеме кибербезопасности и соблюдать простые правила.';
var index_2 = 0;
var printed_2 = false;

function PrintText_2() {
    const element_2 = document.getElementById('textvvod');
     // Убрать класс скрывающий элемент
    if (index_2 < text_2.length) {
        element_2.textContent += text_2[index_2]

        index_2++

    
        setTimeout(PrintText_2, 100)
    }else {
        printed_2 = true;

    }
}   


function start() {
    var elementstart = document.getElementById('blockstart1');
    elementstart.classList.add('active');

    setTimeout(PrintText_3, 900)
}






const text_3 = 'Привет, путник. Ты находишься на планете Z-238 и видимо здесь не просто так?';
var index_3 = 0;
var printed_3 = false;

function PrintText_3() {
    const element_3 = document.getElementById('sms');
     // Убрать класс скрывающий элемент
    if (index_3 < text_3.length) {
        element_3.textContent += text_3[index_3]

        index_3++

    
        setTimeout(PrintText_3, 40)
    }else {
        printed_3 = true;

    }
}   

function Deletetext1() {
    var elementstart5 = document.getElementById('sms2');
    elementstart5.classList.add('active');
    var elementstart5 = document.getElementById('smsPeople1');
    elementstart5.classList.add('active');
    var elementstart5 = document.getElementById('smsStart2');
    elementstart5.classList.remove('active');
    var elementstart5 = document.getElementById('smsStartPeople1');
    elementstart5.classList.remove('active');
    var elementstart5 = document.getElementById('smsPeople');
    elementstart5.classList.remove('active');
    var elementstart5 = document.getElementById('smsStartPeople');
    elementstart5.classList.remove('active');
    var elementstart5 = document.getElementById('smsStart3');
    elementstart5.classList.remove('active');
    var elementstart5 = document.getElementById('sms3');
    elementstart5.classList.add('active1');

    setTimeout(printAnswer, 100)
}

function printAnswer() {
    var elementstart1 = document.getElementById('smsStartPeople');
    elementstart1.classList.add('active');

    setTimeout(PrintText_4, 500)
}

const text_4 = 'По чем дошик?';
var index_4 = 0;
var printed_4 = false;

function PrintText_4() {
    const element_4 = document.getElementById('smsPeople');
     // Убрать класс скрывающий элемент
    if (index_4 < text_4.length) {
        element_4.textContent += text_4[index_4]

        index_4++

    
        setTimeout(PrintText_4, 80)
    }else {

        setTimeout(Answer, 500)
        printed_4 = true;

    }
}   

function Answer() {
    var elementstart2 = document.getElementById('smsStart1');
    elementstart2.classList.add('active');

    setTimeout(Answer1, 500)
}

function Answer1() {
    var elementstart3 = document.getElementById('sms1');
    elementstart3.classList.add('active');

    var elementstart4 = document.getElementById('people');
    elementstart4.classList.add('active');

    document.getElementById('smsAnswer').removeAttribute('onclick');
}












const text_5 = 'Отлично! На этой и следующих планетах ты познакомишься с основами, а затем нужно будет пройти небольшой тест!';
var index_5 = 0;
var printed_5 = false;

function PrintText_5() {
    const element_5 = document.getElementById('sms2');
     // Убрать класс скрывающий элемент
    if (index_5 < text_5.length) {
        element_5.textContent += text_5[index_5]

        index_5++

    
        setTimeout(PrintText_5, 40)
    }else {
        printed_5 = true;

        document.getElementById('smsAnswer1').removeAttribute('onclick');

        setTimeout(PrintDouble, 200)
    }
}   

function PrintDouble() {
    var elementstart5 = document.getElementById('sms3');
    elementstart5.classList.remove('active1');
    var elementstart2 = document.getElementById('smsStart3');
    elementstart2.classList.add('active');
    
    setTimeout(PrintDouble1, 100) 
}

const text_7 = 'После прохождения каждого исптыния, ты будешь получать пароли, которые нужно будет вписывать в окно, для завершения.';
var index_7 = 0;
var printed_7 = false;

function PrintDouble1() {
    const element_7 = document.getElementById('sms3');
     // Убрать класс скрывающий элемент
    if (index_7 < text_7.length) {
        element_7.textContent += text_7[index_7]

        index_7++

    
        setTimeout(PrintDouble1, 40)
    }else {
        printed_7 = true;

        var elementstart5 = document.getElementById('blockpassword');
        elementstart5.classList.add('active');
        setTimeout(BlockPass, 2000)

    }
}   

function BlockPass() {
    var elementstart5 = document.getElementById('blockpassword');
    elementstart5.classList.add('active1');
    var elementstart5 = document.getElementById('blockstart01');
    elementstart5.classList.add('active');

    setTimeout(Two, 2000)
}

function Two() {
    var elementstart5 = document.getElementById('blockstart01');
    elementstart5.classList.add('active1');

    setTimeout(Password, 1000)
}

function Deletetext (){
    var elementstart5 = document.getElementById('sms1');
    elementstart5.classList.add('active1');
    var elementstart5 = document.getElementById('smsPeople');
    elementstart5.classList.add('active');
    var elementstart5 = document.getElementById('smsStart1');
    elementstart5.classList.remove('active');
    var elementstart5 = document.getElementById('smsStartPeople');
    elementstart5.classList.remove('active');
    var elementstart5 = document.getElementById('sms2');
    elementstart5.classList.remove('active');
    var elementstart5 = document.getElementById('smsPeople1');
    elementstart5.classList.remove('active');

    setTimeout(printAnswer1, 100)

}

function printAnswer1() {
    var elementstart1 = document.getElementById('smsStartPeople1');
    elementstart1.classList.add('active');

    setTimeout(PrintText_6, 500)
}

const text_6 = 'Да, по делу!';
var index_6 = 0;
var printed_6 = false;

function PrintText_6() {
    const element_6 = document.getElementById('smsPeople1');
     // Убрать класс скрывающий элемент
    if (index_6 < text_6.length) {
        element_6.textContent += text_6[index_6]

        index_6++

    
        setTimeout(PrintText_6, 80)
    }else {

        setTimeout(Answer2, 600)
        printed_6 = true;

    }
}   

function Answer2() {
    var elementstart2 = document.getElementById('smsStart2');
    elementstart2.classList.add('active');

    setTimeout(PrintText_5, 500)
}






function Password() {
    var elementstart2 = document.getElementById('blockpassword02');
    elementstart2.classList.add('active');
    setTimeout(Password1, 500)
}


function Password1() {
    setTimeout(PrintPassword, 500)
}

const text_password = 'Важнейшим аспектом безопасности в интернете является использование надежных паролей. Хороший пароль должен быть длинным (12 символов), содержать буквы верхнего и нижнего регистра, цифры и специальные символы. Не используйте личные данные или простые слова в паролях. Регулярно меняйте пароли для различных аккаунтов.';
var index_password = 0;
var printed_password = false;

function PrintPassword() {
    const element_password = document.getElementById('inform');
     // Убрать класс скрывающий элемент
    if (index_password < text_password.length) {
        element_password.textContent += text_password[index_password]

        index_password++

    
        setTimeout(PrintPassword, 30)
    }else {
        printed_password = true;

        setTimeout(PrintPassword1, 100)

    }
}   

const text_password1 = 'Также важно быть внимательным к подозрительным сообщениям и запросам онлайн. Никогда не предоставляйте личные данные или пароли по ссылкам из электронных писем. Будьте осмотрительны при взаимодействии с незнакомыми сайтами и людьми в интернете.';
var index_password1 = 0;
var printed_password1 = false;

function PrintPassword1() {
    const element_password1 = document.getElementById('inform1');
     // Убрать класс скрывающий элемент
    if (index_password1 < text_password1.length) {
        element_password1.textContent += text_password1[index_password1]

        index_password1++

    
        setTimeout(PrintPassword1, 30)
    }else {
        printed_password1 = true;

        setTimeout(PrintPassword2, 100)

    }
}   

const text_password2 = 'Запомните, что базовые принципы безопасности помогут вам обезопасить вашу онлайн активность. Удачи в прохождении уровня!';
var index_password2 = 0;
var printed_password2 = false;

function PrintPassword2() {
    const element_password2 = document.getElementById('inform2');
     // Убрать класс скрывающий элемент
    if (index_password2 < text_password2.length) {
        element_password2.textContent += text_password2[index_password2]

        index_password2++

    
        setTimeout(PrintPassword2, 30)
    }else {
        printed_password2 = true;

    }
}   



function PlayGame() {
    var elementstart2 = document.querySelector('.blockgame');
    elementstart2.classList.add('active2');

    PlayGame2()
}

function PlayGame2() {
    var elementstart2 = document.querySelector('.blockgame');
    elementstart2.classList.add('active3');
}






function PlayText() {
    var elementstart3 = document.getElementById('show');
    elementstart3.classList.remove('active1');
    var elementstart2 = document.getElementById('show');
    elementstart2.classList.add('active');

    setTimeout(PlayText1, 20000)
}

function PlayText1() {
    var elementstart2 = document.getElementById('show');
    elementstart2.classList.remove('active');
    var elementstart3 = document.getElementById('show');
    elementstart3.classList.add('active1');

    setTimeout(PlayText, 10)
}
