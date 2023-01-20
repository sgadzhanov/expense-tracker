import { useContext } from 'react';
import { useTransaction } from '../../assets/hooks/useTransaction';
import { CartContext } from '../../context/cart-context';

import classes from './AddTransaction.module.css';

const AddTransaction = () => {
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
  } = useTransaction((amount) => amount.trim().length > 0 && +amount !== 0);

  const isValidForm = textInputIsValid && amountInputIsValid;

  const ctx = useContext(CartContext);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!isValidForm) {
      return
    }

    ctx.addTransaction({ text: textInput, amount: amountInput });
    clearText();
    clearAmount();
  };

  const textInputStyleClass = !textInputIsValid && textIsBlur ? classes.invalid__text : classes.text__input;
  const amountInputStyleClass = !amountInputIsValid && amountIsBlur ? classes.invalid__amount : classes.amount__input;

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.transaction__title}>
        <h4>Add New Transaction</h4>
      </div>
      <div className={classes.text__container}>
        <label htmlFor='text'>Text</label>
        <input
          className={textInputStyleClass}
          value={textInput}
          onChange={textChangeHandler}
          onBlur={textBlurHandler}
          placeholder='Enter text...'
        />
        {!textInputIsValid && textIsBlur &&
          <p className={classes.validation}>Please enter a valid non-empty text.</p>
        }
      </div>
      <div className={classes.tamount__container}>
        <label htmlFor='amount'>Amount</label>
        <div className={classes.label__description}>
          (negative - expense, positive - income)
        </div>
        <input
          className={amountInputStyleClass}
          value={amountInput}
          onChange={amountChangeHandler}
          onBlur={amountBlurHandler}
          placeholder='Enter amount...'
        />
        {!amountInputIsValid && amountIsBlur &&
          <p className={classes.validation}>Please enter valid amount (shouldn't be 0)</p>
        }
      </div>
      <button
        className={isValidForm ? classes.transaction__button : classes.disabled__button}>
        Add Transaction
      </button>
    </form>
  )
};

export default AddTransaction;
