import classes from './Input.module.css';

const Input = (props) => {
  const {
    inputIsBlur,
    isValidInput,
    inputValue,
    changeHandler,
    blurHandler,
    placeholder
  } = props;

  console.log(isValidInput)
  const styleClasses = !isValidInput && inputIsBlur ? classes.invalid__input : classes.myInput;

  return (
    <input
      className={styleClasses}
      value={inputValue}
      onChange={changeHandler}
      onBlur={blurHandler}
      placeholder={placeholder}
    />
  )
};

export default Input;