import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const KEY_LS_FORM = "feedback-form-state";
const inputEmail = form.elements.email;
const inputMessage = form.elements.message;
let objForm = {};

form.addEventListener('input', throttle(handleForm, 500));
form.addEventListener('submit', handleSubmit);


function handleForm(evt) {
    objForm[evt.target.name] = evt.target.value;
    localStorage.setItem(KEY_LS_FORM, JSON.stringify(objForm));
}

function onLoad() {
    const data = JSON.parse(localStorage.getItem(KEY_LS_FORM));
    inputEmail.value = data.email;
    inputMessage.value = data.message ;
    }
    onLoad();

function handleSubmit(evt){
    evt.preventDefault()
    
    form.reset()
    localStorage.removeItem(KEY_LS_FORM)
    console.log(objForm);
}

