const formRef = document.querySelector('.login-form');

const onSubmitForm = event => {
  event.preventDefault();

  const { elements } = event.currentTarget;

  const emailValue = elements['email'].value;
  const passwordValue = elements['password'].value;

  if (emailValue === '' || passwordValue.trim() === '') {
    alert('All fields must be filled');
    return;
  }
  console.log({ email: `${emailValue}`, password: `${passwordValue}` });

  event.currentTarget.reset();
};
formRef.addEventListener('submit', onSubmitForm);
