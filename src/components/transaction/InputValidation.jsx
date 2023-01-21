import React from 'react';

import classes from './InputValidation.module.css';

const InputValidation = () => {
  return <p className={classes.validation}>Please enter valid amount (shouldn't be 0)</p>
};

export default InputValidation;