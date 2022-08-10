import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { login } = useAuth();
  const history = Navigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(email, password);
      history('/');
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError('failed to login!!');
    }
  }
  return (
    <Form style={{ height: '330px' }} onSubmit={handleSubmit}>
      <TextInput
        type='text'
        placeholder='Enter Email'
        icon='alternate_email'
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextInput type='password' placeholder='Enter Password' icon='lock' />

      <Button> Submit Now </Button>
      <div className='info'>
        Don't have an account? <Link to='/signup'>Signup</Link> instead.
      </div>
    </Form>
  );
};

export default LoginForm;
