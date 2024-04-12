const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const inputEmail = form.querySelector('input');
const textarea = form.querySelector('textarea');

form.addEventListener('submit', handleSubmit);
inputEmail.addEventListener('input', messageInput);
textarea.addEventListener('input', messageInput);

returnUserMessage();

//дії при відправленні форми
function handleSubmit(event) {
  event.preventDefault();
  const userEmail = inputEmail.value.trim();
  const userMessage = textarea.value.trim();

  if (userEmail === '' || userMessage === '') {
    alert('Будь ласка, заповніть всі дані');
    return;
  }

  const userDataObject = [{ email: userEmail }, { message: userMessage }];
  console.log(userDataObject);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

//дії при введенні данних
function messageInput() {
  const message = inputEmail.value.trim() + '*' + textarea.value.trim();
  localStorage.setItem(STORAGE_KEY, message);
}

//дії після оновлення сторінки
function returnUserMessage() {
  const savedUserMessage = localStorage.getItem(STORAGE_KEY);
  if (savedUserMessage) {
    const messageParts = savedUserMessage.split('*');
    inputEmail.value = messageParts[0];
    textarea.value = messageParts[1];
  }
}
