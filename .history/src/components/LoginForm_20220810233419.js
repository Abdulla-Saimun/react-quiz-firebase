import React from 'react';

const LoginForm = () => {
  return (
    <Form className={`${classes.login}`}>
      <TextInput type='text' placeholder='Enter Email' icon='alternate_email' />
      <TextInput type='password' placeholder='Enter Password' icon='lock' />

      <Button> Submit Now </Button>
      <div className='info'>
        Don't have an account? <a href='signup.html'>Signup</a> instead.
      </div>
    </Form>
  );
};

export default LoginForm;
