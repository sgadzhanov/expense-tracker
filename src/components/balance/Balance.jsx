import { useContext } from "react"
import { CartContext } from "../../context/cart-context";

import classes from './Balance.module.css';

const Balance = () => {
  const { history } = useContext(CartContext);
  const balance = history.reduce((prev, curr) => { return prev + +curr.sum }, 0);

  return (
    <div className={classes.balance__container}>
      <p className={classes.sum}>${balance.toFixed(2)}</p>
      <p className={classes.balance}>YOUR BALANCE</p>
    </div>
  )
};

export default Balance;