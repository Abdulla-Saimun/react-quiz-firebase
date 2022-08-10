import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';

const LoginForm = () => {
  return (
    <Form style={{ height: '330px' }}>
      <TextInput type='text' placeholder='Enter Email' icon='alternate_email' />
      <TextInput type='password' placeholder='Enter Password' icon='lock' />

      <Button> Submit Now </Button>
      <div className='info'>
        Don't have an account? <Link to='/signup'>Signup</Link> instead.
      </div>
    </Form>
  );
};

export default LoginForm;
