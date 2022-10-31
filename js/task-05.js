const inputRef = document.querySelector(`#name-input`);
const nameRef = document.querySelector(`#name-output`);

const handleClick = ({ currentTarget: { value } }) => {
  if (value.trim() === '') {
    nameRef.textContent = 'Anonymous';
  } else {
    nameRef.textContent = value;
  }
};

inputRef.addEventListener('input', handleClick);
