import classes from './BaseButton.module.css';

const BaseButton = ({ isValidForm, text }) => {
  const styles = isValidForm ? classes.base__button : classes.disabled__button

  return <button className={styles}>{text}</button>
};

export default BaseButton;