import React from 'react';
import classes from '../styles/Question.module.css';
import Answers from './Answers';
const Question = () => {
  return (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className='material-icons-outlined'> help_outline </span>
        Question will be here
      </div>
      <Answers />
    </div>
  );
};

export default Question;
