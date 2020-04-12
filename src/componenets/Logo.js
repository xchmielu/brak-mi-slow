import styled from 'styled-components';
import React from 'react';

const LogoTemplate = styled.p`
  font-size: 1.7em;
  line-height: 10px;
  color: #3b3d3c;
  font-family: 'Lato';
  font-weight: 400;
`;

export default () => (
  <LogoTemplate>
    Brak<b>mi</b>Słów
  </LogoTemplate>
);
