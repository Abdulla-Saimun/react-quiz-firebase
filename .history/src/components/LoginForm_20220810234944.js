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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type='password'
        placeholder='Enter Password'
        icon='lock'
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type='submit' disabled={loading}>
        {' '}
        Submit Now{' '}
      </Button>
      {error && <p className='error'>{error}</p>}
      <div className='info'>
        Don't have an account? <Link to='/signup'>Signup</Link> instead.
      </div>
    </Form>
  );
};

export default LoginForm;
