import React from 'react';
import PrimaryLayout from '../../componenets/Templates/PrimaryLayout';
import { Button } from '../../componenets/Buttons/Button';
import { Link } from 'react-router-dom';
const Root = () => {
  return (
    <PrimaryLayout>
      <div className='home__message'>
        <h1>
          Ucz się<br></br> nowych<br></br> słów!
        </h1>
        <p>
          Codziennie poznawaj nowe słowa. Wzbogać swoję słownictwo w łatwy i
          przyjemny sposób. Dodawaj nowe słowa oraz rywalizuj ze znajomymi.
        </p>
        <Link to='/rejestracja'>
          <Button secondary>Rozpocznij naukę</Button>
        </Link>
      </div>
      <div className='home__image'>
        <img
          style={{ width: '40em', float: 'right' }}
          src='./Ludzik-z-ksiazkami.svg'
          alt='ludzik'
        />
      </div>
    </PrimaryLayout>
  );
};

export default Root;
