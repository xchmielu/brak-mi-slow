import React from 'react';
import RegisterLayout from '../componenets/Templates/RegisterLayout';
import RegisterForm from '../componenets/RegisterForm';




const Register = () => {
  return (
    <RegisterLayout>
      <h1>Zarejestruj się!</h1>
      <div className='register__form'>
        <RegisterForm />

      </div>
    </RegisterLayout>
  );
};

export default Register;
