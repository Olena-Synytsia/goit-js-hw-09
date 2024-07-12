const formData = { email: '', message: '' };

const form = document.querySelector('form.feedback-form');

populateInput();

form.addEventListener('input', handleInput);

form.addEventListener('submit', handleFormSubmit);

function handleInput(event) {
  if (event.target.matches('[name="email"]')) {
    formData.email = event.target.value.trim();
  } else if (event.target.matches('[name="message"]')) {
    formData.message = event.target.value.trim();
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
}

function handleFormSubmit(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
}
