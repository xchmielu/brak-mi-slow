import React from 'react';
import { Navbar } from 'react-bootstrap';
import Logo from '../Logo';
import { Button } from '../Buttons/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ItemsAlign = styled.div`
  width: 100%;
  float: right;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export default () => (
  <Navbar>
    <Link to='/'>
      <Logo />
    </Link>

    <ItemsAlign>
      <Link to='/login'>
        <Button>Login</Button>
      </Link>
    </ItemsAlign>
  </Navbar>
);
