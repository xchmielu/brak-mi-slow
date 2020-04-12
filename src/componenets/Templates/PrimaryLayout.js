import React from 'react';
import Navigation from './Navigation';

const PrimaryLayout = (props) => (
  <div className='container'>
    <Navigation />
    <div className='home'>{props.children}</div>
  </div>
);
export default PrimaryLayout;
