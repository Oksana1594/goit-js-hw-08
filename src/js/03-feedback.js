import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
import { save, load, remove } from './storage';

initPage();

formRef.addEventListener('input', throttle(onFormInput, 500));
function onFormInput(event) {
  const { name, value } = event.target;
  let saveData = load(STORAGE_KEY);
  saveData = saveData ? saveData : {};
  saveData[name] = value;
  save(STORAGE_KEY, saveData);
}

function initPage() {
  const saveData = load(STORAGE_KEY);
  console.log(saveData);
  if (!saveData) {
    return;
  }
  Object.entries(saveData).forEach(([name, value]) => {
    formRef.elements[name].value = value;
  });
}
function handleSudmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  console.log({ email: email.value, message: message.value });
  event.currentTarget.reset();
  remove(STORAGE_KEY);
}
formRef.addEventListener('submit', handleSudmit);
