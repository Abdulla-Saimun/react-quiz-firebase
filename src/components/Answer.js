import React from 'react';
import classes from '../styles/Answer.module.css';
import Checkbox from './Checkbox';

const Answer = ({ text }) => {
  return (
    <div className={classes.answer}>
      <Checkbox className={classes.answer} text={text} />
    </div>
  );
};

export default Answer;
