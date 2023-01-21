import React from 'react';
import classes from './Label.module.css';

const Label = ({ hfor, labelText, description }) => {
  return (
    <React.Fragment>
      <label htmlFor={hfor}>{labelText}</label>
      {description &&
        <div className={classes.label__description}>{description}</div>
      }
    </React.Fragment>
  );
};

export default Label;