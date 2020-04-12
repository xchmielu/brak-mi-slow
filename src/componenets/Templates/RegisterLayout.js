import React from 'react';
import Navigation from './Navigation';

const RegisterLayout = (props) => (
    <div className='container'>
        <Navigation />
        <div className='register'>{props.children}</div>
    </div>
);
export default RegisterLayout;
