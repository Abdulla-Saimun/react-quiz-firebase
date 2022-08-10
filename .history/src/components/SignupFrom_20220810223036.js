import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from './Form';
import TextInput from './TextInput';

const SignupFrom = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setComfirmPassword] = useState('');
  const [agree, setAgree] = useState('');

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    //do validation
    if (password !== confirmPassword) {
      return setError("password don't match");
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password, username);
      history('/');
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError('failed to create account');
    }
  }
  return (
    <Form style={{ height: '500px' }} onSubmit={handleSubmit}>
      <TextInput
        type='text'
        placeholder='Enter Name'
        icon='person'
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
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
      <TextInput
        type='password'
        placeholder='Confirm Password'
        icon='lock_clock'
        required
        value={confirmPassword}
        onChange={(e) => setComfirmPassword(e.target.value)}
      />
      <Checkbox
        required
        text=' I agree to the terms &amp; conditions'
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />
      <Button disabled={loading} type='submit'>
        {' '}
        Submit Now{' '}
      </Button>
      {error && <p className='error'>{error}</p>}
      <div className='info'>
        Already have an account? <Link to='/login'>Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignupFrom;
