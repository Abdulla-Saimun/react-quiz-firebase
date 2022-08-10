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
      />
      <TextInput type='text' placeholder='Enter Email' icon='alternate_email' />
      <TextInput type='password' placeholder='Enter Password' icon='lock' />
      <TextInput
        type='password'
        placeholder='Confirm Password'
        icon='lock_clock'
      />
      <Checkbox text=' I agree to the terms &amp; conditions' />
      <Button> Submit Now </Button>
      <div className='info'>
        Already have an account? <Link to='/login'>Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignupFrom;
