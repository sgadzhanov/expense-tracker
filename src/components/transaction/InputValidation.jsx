import React from 'react';

import classes from './InputValidation.module.css';

const InputValidation = ({ message }) => {
  return <p className={classes.validation}>{message}</p>
};

export default InputValidation;