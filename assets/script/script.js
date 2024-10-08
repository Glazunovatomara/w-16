// Используя JavaScript, добавьте обработчик события отправки формы (submit), который будет выполнять следующие действия:

//Отменять действие по умолчанию для события submit
//Отображать сообщение об ошибке рядом с каждым полем при обнаружении ошибки валидации
//Кнопка отправки должна быть неактивна (disabled), пока все поля формы не будут правильно заполнены и не будет отмечен чекбокс согласия с условиями
//Если форма проходит проверку валидности, выводите в консоль значения полей формы и очищайте форму

const form = document.forms[0];
const inpuFields = document.querySelectorAll('input') ;
const select = document.querySelector('select');
const clientName = form.elements.client_name;
const clientEmail = form.elements.client_email;
const clientAge = form.elements.client_age;
const clientGender = form.elements.gender;
const clientProfession = form.elements.profession;
const password = form.elements.client_password;
const checkbox = form.elements.checkbox_block;

const button = form.elements.submit;

// строка с ошибками 

const errorStr = form.getAttribute('.error');

let errorStrName = document.querySelector('.error_name');
let errorStrEmail = document.querySelector('.error_email');
let errorStrAge = document.querySelector('.error_age');
let errorStrGender = document.querySelector('.error_gender');
let errorStrProfession = document.querySelector('.error_profession');
let errorStrPassword = document.querySelector('.error_password');
let errorStrCheckbox = document.querySelector('.error_block');

const errorEmpty = 'Поле не заполнено';

inpuFields.forEach(function(input) {
    input.addEventListener('focus', function() {
        input.style.border = '2px solid #2aa5a1';
    });

    input.addEventListener('blur', function() {
        input.style.border = '';
    });
});

select.addEventListener('focus', function() {
    select.style.border = '2px solid #2aa5a1';
});

select.addEventListener('blur', function() {
    select.style.border = '';
});


const formSend = () => {
    let clientNameValue = clientName.value ;
    let clientEmailValue = clientEmail.value;
    let clientAgeValue = clientAge.value;
    let clientGenderValue = clientGender.value;
    let clientProfessionValue = clientProfession.value;
    let passwordValue = password.value;
    let checkboxValue = checkbox.checked; 

    console.log(`name: ${clientNameValue}, email: ${clientEmailValue}, age:${clientAgeValue},  gender: ${clientGenderValue}, profession:${clientProfessionValue}, password:${passwordValue}, checkbox:${checkboxValue}`);
}
button.addEventListener('click',formSend);