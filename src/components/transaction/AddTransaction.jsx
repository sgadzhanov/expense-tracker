import { useState, useContext } from 'react';
import { CartContext } from '../../context/cart-context';

import classes from './AddTransaction.module.css';

const AddTransaction = () => {
  const [textInput, setTextInput] = useState('');
  const [textIsBlur, setTextIsBlur] = useState(false);
  const [amountInput, setAmountInput] = useState('');
  const [amountIsBlur, setAmountIsBlur] = useState(false);

  const textInputIsValid = textInput.trim().length !== 0;
  const amountInputIsValid = amountInput.trim().length !== 0 && amountInput.trim() !== '0';

  const isValidForm = textInputIsValid && amountInputIsValid;

  const ctx = useContext(CartContext);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!isValidForm) {
      return
    }

    ctx.addTransaction({ text: textInput, amount: amountInput });
    setTextIsBlur(false);
    setAmountIsBlur(false);

    setTextInput('');
    setAmountInput('');
  };

  const textChangeHandler = (e) => setTextInput(e.target.value);

  const amountChangeHandler = (e) => setAmountInput(e.target.value);

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
          onBlur={() => setTextIsBlur(true)}
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
          onBlur={() => setAmountIsBlur(true)}
          type='number'
          placeholder='Enter amount...'
        />
        {!amountInputIsValid && amountIsBlur &&
          <p className={classes.validation}>Please enter valid amount (shouldn't be 0)</p>
        }
      </div>
      <button
        // disabled={!isValidForm}
        className={isValidForm ? classes.transaction__button : classes.disabled__button}>
        Add Transaction
      </button>
    </form>
  )
};

export default AddTransaction;