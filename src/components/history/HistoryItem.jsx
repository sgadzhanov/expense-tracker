import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

import classes from './HistoryItem.module.css';

const HistoryItem = ({ id: transactionId, title, sum }) => {
  const ctx = useContext(CartContext);

  const deleteItemHandler = () => {
    ctx.deleteTransaction(transactionId)
  };

  const styleClasses = sum < 0
    ? classes['hitem__sum_expense']
    : classes['hitem__sum_income'];

  return (
    <div className={classes.hitem__container}>
      <div className={classes.title__container}>
        <p className={classes.hitem__title}>{title}</p>
        <span onClick={deleteItemHandler} className={classes.delete__button}>x</span>
      </div>
      <p className={styleClasses}>{sum < 0 ? '' : '+'}{sum}</p>
    </div>
  )
};

export default HistoryItem;