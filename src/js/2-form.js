const form = document.querySelector(`form.feedback-form`);
console.dir(form);

const formData = { email: '', message: '' };
console.dir(formData);

form.addEventListener('input', handleInput);

function handleInput(event) {
  event.preventDefault();

  let inputEmail = form.elements.email.value.trim();
  let inputMessage = form.elements.message.value.trim();

  console.log(inputEmail);
  console.log(inputMessage);
}

// let formObj = {
//   email: inputEmail,
//   password: inputPassword,
// };

form.reset();
