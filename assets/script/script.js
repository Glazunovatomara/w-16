// Используя JavaScript, добавьте обработчик события отправки формы (submit), который будет выполнять следующие действия:

//+ Отменять действие по умолчанию для события submit
// + Отображать сообщение об ошибке рядом с каждым полем при обнаружении ошибки валидации 
// + Кнопка отправки должна быть неактивна (disabled), пока все поля формы не будут правильно заполнены и не будет отмечен чекбокс согласия с условиями
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

// + строка с ошибками 

const errorStr = form.getAttribute('.error');

let errorStrName = document.querySelector('.error_name');
let errorStrEmail = document.querySelector('.error_email');
let errorStrAge = document.querySelector('.error_age');
let errorStrGender = document.querySelector('.error_gender');
let errorStrProfession = document.querySelector('.error_profession');
let errorStrPassword = document.querySelector('.error_password');
let errorStrCheckbox = document.querySelector('.error_block');

const showErrorMessage = () => {
    const errorEmpty = 'Поле не заполнено';

    let clientNameValue = clientName.value;
    const nameRagex = /^(?=.*[a-z])(?=.*[A-Z]){2,20}$/;
    if(clientNameValue === '') {
        errorStrName.textContent = errorEmpty;
        errorStrName.style.display = 'block';
    } else if(nameRagex.test(clientNameValue)) {
        errorStrName.textContent = '';
        errorStrName.style.display = '';
    } else {
        errorStrName.textContent = 'Некорректный формат имени';
        errorStrName.style.display = 'block';
    };

    const emailValue = clientEmail.value;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    if (emailValue === '') {
        errorStrEmail.textContent = errorEmpty;
        errorStrEmail.style.display = 'block';
    } else if (emailRegex.test(emailValue)) {
        // Если email соответствует формату, убираем сообщение об ошибке
        errorStrEmail.textContent = '';
        errorStrEmail.style.display = '';
    } else {
        errorStrEmail.textContent = 'Некорректный формат Email';
        errorStrEmail.style.display = 'block';
    };

    let clientAgeValue = clientAge.value;
    if(clientAgeValue === '') {
        errorStrAge.textContent = errorEmpty;
        errorStrAge.style.display = 'block';
    } else {
        errorStrAge.textContent = '';
        errorStrAge.style.display = '';
    }

    let clientProfessionValue = clientProfession.value;
    if(clientProfessionValue === '') {
        errorStrProfession.textContent = errorEmpty;
        errorStrProfession.style.display = 'block';
    } else {
        errorStrProfession.textContent = '';
        errorStrProfession.style.display = '';
    }

    let passwordValue = password.value;
    //const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d){8,20}$/;
    let passwordRegex1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,20}$/;
    if(passwordValue === '') {
        errorStrPassword.textContent = errorEmpty;
        errorStrPassword.style.display = 'block';
    } else if(passwordRegex1.test(passwordValue)) {
        errorStrPassword.textContent = '';
        errorStrPassword.style.display = '';
    } else {
        errorStrPassword.textContent = 'Некорректный формат пароля';
        errorStrPassword.style.display = 'block';
    }

    let checkboxValue = checkbox.checked; 
    if(checkboxValue === false) {
        errorStrCheckbox.textContent = errorEmpty;
        errorStrCheckbox.style.display = 'block';
    } else {
        errorStrCheckbox.textContent = '';
        errorStrCheckbox.style.display = 'block';
    }

};

// + обработчики событий focus и blur для каждого поля

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


let clientNameValue = clientName.value ;
let clientEmailValue = clientEmail.value;
let clientAgeValue = clientAge.value;
let clientGenderValue = clientGender.value;
let clientProfessionValue = clientProfession.value;
let passwordValue = password.value;
let checkboxValue = checkbox.checked; 

//Отменяем стандартное поведение
function formSubmit(event) {
    // Просим форму не отправлять данные самостоятельно
    event.preventDefault()
}
form.addEventListener('submit',formSubmit)

button.disabled = false;

const formSend = () => {
    //Проверяем данные пользователя
    const nameRagex = /^(?=.*[a-z])(?=.*[A-Z]){2,20}$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    //const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d){8,20}$/;
    let passwordRegex1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,20}$/;
    
    if(nameRagex.test(clientName.value) && emailRegex.test(email.value) && clientProfession.value !== '' && clientAge.value !== '' && passwordRegex1.test(password.value) && checkbox.checked === true){
        form.submit();
        form.elements.submit.disabled = true;
    //выводите в консоль значения полей формы
        console.log(`name: ${clientName.value}, email: ${clientEmail.value}, age:${clientAge.value},  gender: ${clientGender.value}, profession:${clientProfession.value}, password:${password.value}, checkbox:${checkbox.checked}`);
        
    //Сброс полей формы
        form.reset()
        alert `if`
    } else {
        button.disabled = false;
        alert `else`
    }

//    showErrorMessage()
//    console.log(`name: ${clientName.value}, email: ${clientEmail.value}, age:${clientAge.value},  gender: ${clientGender.value}, profession:${clientProfession.value}, password:${password.value}, checkbox:${checkbox.checked}`);
}

button.addEventListener('click',formSend);