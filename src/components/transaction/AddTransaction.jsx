import { useContext, useState } from 'react';
import { useTransaction } from '../../assets/hooks/useTransaction';
import { CartContext } from '../../context/cart-context';

import Input from './Input';
import InputValidation from './InputValidation';
import Label from './Label';
import BaseButton from '../../ui/BaseButton';

import classes from './AddTransaction.module.css';

const INVALID_FORM_VALIDATION_MESSAGE = 'Please enter valid text and/or amount.';

const validateAmount = (amount) => {
  const number = +amount;
  if (!number) {
    return false
  }
  return number !== 0
}

const AddTransaction = () => {
  const [formValidaiton, setFormValidation] = useState('');

  const {
    enteredInput: textInput,
    inputIsBlur: textIsBlur,
    isValidInput: textInputIsValid,
    inputChangeHandler: textChangeHandler,
    inputBlurHandler: textBlurHandler,
    clearInput: clearText,
  } = useTransaction((input) => input.trim().length > 0);

  const {
    enteredInput: amountInput,
    inputIsBlur: amountIsBlur,
    isValidInput: amountInputIsValid,
    inputChangeHandler: amountChangeHandler,
    inputBlurHandler: amountBlurHandler,
    clearInput: clearAmount,
  } = useTransaction((amount) => validateAmount(amount));

  const isValidForm = textInputIsValid && amountInputIsValid;

  const transactionContext = useContext(CartContext);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!isValidForm) {
      setFormValidation(INVALID_FORM_VALIDATION_MESSAGE);
      return;
    }

    transactionContext.addTransaction({ text: textInput, amount: amountInput });
    clearText();
    clearAmount();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.transaction__title}>
        <h4>Add New Transaction</h4>
      </div>
      <div className={classes.text__container}>
        <Label
          hfor='text'
          labelText='Text'
        />
        <Input
          isValidInput={textInputIsValid}
          inputIsBlur={textIsBlur}
          inputValue={textInput}
          changeHandler={textChangeHandler}
          blurHandler={textBlurHandler}
          placeholder='Enter text...'
        />
        {!textInputIsValid && textIsBlur &&
          <InputValidation message='Please enter valid name' />
        }
      </div>
      <div className={classes.tamount__container}>
        <Label
          hfor='amount'
          labelText={'Amount'}
          description='(negative - expense, positive - income)'
        />
        <Input
          isValidInput={amountInputIsValid}
          inputIsBlur={amountIsBlur}
          inputValue={amountInput}
          changeHandler={amountChangeHandler}
          blurHandler={amountBlurHandler}
          placeholder='Enter amount...'
        />
        {!amountInputIsValid && amountIsBlur &&
          <InputValidation message="Please enter valid amount (shouldn't be 0)" />
        }
      </div>
      <BaseButton isValidForm={isValidForm} text='ADD TRANSACTION' />
      {formValidaiton && !isValidForm &&
        <InputValidation message={INVALID_FORM_VALIDATION_MESSAGE} />}

    </form>
  )
};

export default AddTransaction;