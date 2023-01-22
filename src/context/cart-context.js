import React from "react";

export const initialState = {
  income: 0,
  expense: 0,
  balance: 0,
  history: [],
  addTransaction: (transaction) => {},
  deleteTransaction: (transaction) => {},
};

export const CartContext = React.createContext(initialState);