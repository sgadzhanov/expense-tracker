import { useReducer } from "react";
import { CartContext } from "./cart-context";
import { initialState } from "./cart-context";

const cartReducer = (state, action) => {
  switch (action.type) {
    default:
      return initialState;
    case 'ADD_TRANSACTION':
      const actionSum = action.transaction.amount;
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        title: action.transaction.text,
        sum: actionSum
      };

      return {
        ...state,
        history: [newTransaction, ...state.history],
      }

    case 'DELETE_TRANSACTION': {
      const filteredTransactions = state.history.filter(t => t.id !== action.transactionId);

      return {
        ...state,
        history: [...filteredTransactions],
      }
    };
  }
};

export const CartProvider = (props) => {
  const [cartState, dispatchAction] = useReducer(cartReducer, initialState);

  const addTransaction = transaction => {
    dispatchAction({ type: 'ADD_TRANSACTION', transaction });
  };

  const deleteTransaction = transactionId => {
    dispatchAction({ type: 'DELETE_TRANSACTION', transactionId });
  };

  const cartContext = {
    income: cartState.income,
    expense: cartState.expense,
    balance: (cartState.income - cartState.expense).toFixed(2),
    history: cartState.history,
    addTransaction,
    deleteTransaction,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}