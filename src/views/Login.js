import React from 'react';
import LoginForm from '../componenets/LoginForm';
import RegisterLayout from '../componenets/Templates/RegisterLayout';

const Login = () => {
  return (
    <RegisterLayout>
      <h1>Zaloguj się!</h1>
      <div className='register__form'>
        <LoginForm />
      </div>

    </RegisterLayout>
  );
};

export default Login;
