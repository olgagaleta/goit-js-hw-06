const inputRef = document.querySelector(`#font-size-control`);
const textRef = document.querySelector(`#text`);

const onChangeSize = ({ currentTarget: { value } }) => {
  textRef.style.fontSize = `${value}px`;
};

inputRef.addEventListener(`input`, onChangeSize);
