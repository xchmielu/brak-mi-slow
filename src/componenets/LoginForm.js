import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from './Buttons/Button';
import TextField from '@material-ui/core/TextField';
import axios from "axios";

const LoginForm = () => (
    <Formik
        initialValues={{
            username: '',
            password: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
            const { username, password } = values
            axios.post('http://onewordd.herokuapp.com/login', {
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
            password: Yup.string('').required('Enter your password'),
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
                    <Button secondary type='submit'>
                        Zaloguj
          </Button>
                </form>
            );
        }}
    </Formik>
);

export default LoginForm;
