const formData = { email: '', message: '' };

const form = document.querySelector('form.feedback-form');

populateInput();

form.addEventListener('input', handleInput);

function handleInput(event) {
  if (event.target.matches('[name="email"]')) {
    formData.email = event.target.value;
  } else if (event.target.matches('[name="message"]')) {
    formData.message = event.target.value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateInput() {
  const savedInput = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedInput) {
    formData.email = savedInput.email;
    formData.message = savedInput.message;
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
  console.log(savedInput);
}
