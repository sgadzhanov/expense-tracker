import { useState } from "react";

export const useTransaction = (validateInput) => {
  const [enteredInput, setEnteredInput] = useState('');
  const [inputIsBlur, setInputIsBlur] = useState(false);

  const isValidInput = validateInput(enteredInput);

  const inputChangeHandler = (e) => {
    setEnteredInput(e.target.value);
  }

  const inputBlurHandler = () => {
    setInputIsBlur(true);
  }

  const clearInput = () => {
    setEnteredInput('');
    setInputIsBlur(false);
  }

  return {
    enteredInput,
    inputIsBlur,
    isValidInput,
    inputChangeHandler,
    inputBlurHandler,
    clearInput,
  }
};