import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from './Buttons/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'

const RegisterForm = () => (
  <Formik
    initialValues={{
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    }}
    onSubmit={async (values) => {
      console.log(values);
      const { username, password } = values
      axios.post('http://onewordd.herokuapp.com/users/sign-up', {
        username,
        password
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }}
    validationSchema={Yup.object({
      username: Yup.string('Enter a username').required('Username is required'),
      email: Yup.string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
      password: Yup.string('')
        .min(8, 'Password must contain at least 8 characters')
        .required('Enter your password'),
      confirmPassword: Yup.string('Enter your password')
        .required('Confirm your password')
        .oneOf([Yup.ref('password')], 'Password does not match'),
    })}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        // isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <TextField
            id='outlined-basic'
            name='username'
            type='text'
            variant='standard'
            label='Enter your username'
            value={values.username}
            onChange={handleChange}
            error={errors.username && touched.username}
            onBlur={handleBlur}
            className={errors.username && touched.username && 'register__field'}
          />
          {errors.username && touched.username && <div className="error">{errors.username}</div>}
          <TextField
            name='email'
            type='text'
            variant='standard'
            label='Enter your email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email && touched.email}
            className={errors.email && touched.email && 'register__field '}
          />
          {errors.email && touched.email && (
            <div className="error">{errors.email}</div>
          )}
          <TextField
            name='password'
            type='password'
            label='Enter your password'
            variant='standard'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password && touched.password}
            className={errors.password && touched.password && 'register__field'}
          />
          {errors.password && touched.password && (
            <div className="error">{errors.password}</div>
          )}
          <TextField
            label='Retype your password'
            name='confirmPassword'
            type='password'
            variant='standard'
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.confirmPassword && touched.confirmPassword}
            className={
              errors.confirmPassword &&
              touched.confirmPassword &&
              'register__field'
            }
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <div className="error">{errors.confirmPassword}</div>
          )}
          <Button secondary type='submit'>
            Zarejestruj
          </Button>
        </form>
      );
    }}
  </Formik>
);

export default RegisterForm;
