// define variables
const form = document.querySelector('form');
const inputWrappers = document.querySelectorAll('.input-wrapper');
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const errorMsgs = document.querySelectorAll('.error-msg');
const banner = document.querySelector('.banner');
const button = document.querySelector('button');

// reset form
function resetForm() {
  // reset values
  firstNameInput.value = '';
  lastNameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
  // reset input wrapper errors
  for (let inputWrapper of inputWrappers) {
    inputWrapper.classList.remove('input-error');
  }
  // reset error message errors
  for (let errorMsg of errorMsgs) {
    errorMsg.classList.add('hide');
  }
}

resetForm();

// validate form
function validateForm() {
  let isValid = true;
  // validate first name
  if (firstNameInput.value.trim() === '') {
    inputWrappers[0].classList.add('input-error');
    firstNameInput.setAttribute('aria-invalid', 'true');
    errorMsgs[0].classList.remove('hide');
    isValid = false;
  } else {
    inputWrappers[0].classList.remove('input-error');
    firstNameInput.setAttribute('aria-invalid', 'false');
    errorMsgs[0].classList.add('hide');
  }
  // validate last name
  if (lastNameInput.value.trim() === '') {
    inputWrappers[1].classList.add('input-error');
    lastNameInput.setAttribute('aria-invalid', 'true');
    errorMsgs[1].classList.remove('hide');
    isValid = false;
  } else {
    inputWrappers[1].classList.remove('input-error');
    lastNameInput.setAttribute('aria-invalid', 'false');
    errorMsgs[1].classList.add('hide');
  }
  // validate email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    inputWrappers[2].classList.add('input-error');
    emailInput.setAttribute('aria-invalid', 'true');
    errorMsgs[2].classList.remove('hide');
    isValid = false;
  } else {
    inputWrappers[2].classList.remove('input-error');
    emailInput.setAttribute('aria-invalid', 'false');
    errorMsgs[2].classList.add('hide');
  }
  // validate password
  if (passwordInput.value.trim() === '') {
    inputWrappers[3].classList.add('input-error');
    passwordInput.setAttribute('aria-invalid', 'true');
    errorMsgs[3].classList.remove('hide');
    isValid = false;
  } else {
    inputWrappers[3].classList.remove('input-error');
    passwordInput.setAttribute('aria-invalid', 'false');
    errorMsgs[3].classList.add('hide');
  }
  return isValid;
}

// submit form
form.addEventListener('submit', (e) => {
  // prevent default behavior
  e.preventDefault();
  // create data
  const userInputs = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };
  // validate data
  if (validateForm()) {
    // send data
    console.log('Form submitted', userInputs);
    // fade out inputs and button
    inputWrappers.forEach((wrapper) => wrapper.classList.add('fade-out'));
    document.querySelector('.submit-section').classList.add('fade-out');
    // wait for animation to complete, then show success message
    setTimeout(() => {
      // hide all inputs and button
      inputWrappers.forEach((wrapper) => (wrapper.style.display = 'none'));
      document.querySelector('.submit-section').style.display = 'none';
      // hide banner
      banner.classList.add('hide');
      // add success styling to form
      form.classList.add('success');
      // create and show success message
      const successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.innerHTML =
        '<h2>Success!</h2><p>Your form has been submitted successfully.</p>';
      form.appendChild(successMessage);
      // trigger animation
      setTimeout(() => successMessage.classList.add('show'), 10);
    }, 300);
  }
});
