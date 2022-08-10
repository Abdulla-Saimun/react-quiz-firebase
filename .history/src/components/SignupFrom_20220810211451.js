import React from 'react';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from './Form';
import TextInput from './TextInput';
const SignupFrom = () => {
  return (
    <Form style={{ height: '500px' }}>
      <TextInput type='text' placeholder='Enter Name' icon='person' />
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
        Already have an account? <a href='login.html'>Login</a> instead.
      </div>
    </Form>
  );
};

export default SignupFrom;
