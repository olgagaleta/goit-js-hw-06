const formRef = document.querySelector('.login-form');

const onSubmitForm = event => {
  event.preventDefault();

  const { elements } = event.currentTarget;

  if (elements['email'].value === '' || elements['password'].value.trim() === '') {
    alert('All fields must be filled');
    return;
  }
  console.log(`Email: ${email.value}, password: ${password.value}`);
  event.currentTarget.reset();
};
formRef.addEventListener('submit', onSubmitForm);
