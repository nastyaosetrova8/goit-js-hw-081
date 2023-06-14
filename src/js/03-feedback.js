import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const KEY_LS_FORM = 'feedback-form-state';
const inputEmail = form.elements.email;
const inputMessage = form.elements.message;
let objForm = JSON.parse(localStorage.getItem(KEY_LS_FORM)) || {};

form.addEventListener('input', throttle(handleForm, 500));
form.addEventListener('submit', handleSubmit);

function handleForm(evt) {
  objForm[evt.target.name] = evt.target.value;
  localStorage.setItem(KEY_LS_FORM, JSON.stringify(objForm));
}

function onLoad() {
  inputEmail.value = objForm.email || '';
  inputMessage.value = objForm.message || '';
}
onLoad();

function handleSubmit(evt) {
  evt.preventDefault();

  form.reset();
  localStorage.removeItem(KEY_LS_FORM);
  console.log(objForm);
  objForm = {};
}
