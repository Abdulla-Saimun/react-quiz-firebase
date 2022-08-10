import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../styles/Account.module.css';
import { useAuth } from '../context/AuthContext';

const Account = () => {
  const { currentUser } = useAuth();
  return (
    <div className={classes.account}>
      <span className='material-icons-outlined' title='Account'>
        account_circle
      </span>
      <span class='material-icons-outlined' title='Logout'>
        {' '}
        logout{' '}
      </span>
      <Link to='/signup'>Signup</Link>
      <Link to='/login'>Login</Link>
    </div>
  );
};

export default Account;
