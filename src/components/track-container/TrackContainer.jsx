import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

import classes from './TrackContainer.module.css'

const TrackContainer = () => {
  const cartCtx = useContext(CartContext);

  const totalExpenses = calculate(cartCtx.history, 'expenses');
  const totalIncome = calculate(cartCtx.history, 'income');

  return (
    <div className={classes['track__container']}>
      <div>
        <p className={classes.p__track}>INCOME</p>
        <div className={classes.p__track_sum1}>${totalIncome}</div>
      </div>
      <div className={classes.vertical__line} />
      <div>
        <p className={classes.p__track}>EXPENSE</p>
        <div className={classes.p__track_sum2}>${totalExpenses}</div>
      </div>
    </div>
  )
};

const calculate = (array, type) => {
  let totalSum = 0;

  for (const transaction of array) {
    const parsedSum = +transaction.sum;
    if (parsedSum < 0 && type === 'expenses') {
      totalSum -= parsedSum;
    } else if (parsedSum > 0 && type === 'income') {
      totalSum += parsedSum;
    }
  }
  return totalSum.toFixed(2);
};

export default TrackContainer;