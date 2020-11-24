import React from 'react';
import { ContainerHeader, ImgLogo } from './styles';
import Logo from '../../assets/img/logo.svg';

function Header() {
  return (
    <header>
      <ContainerHeader>
        <ImgLogo src={Logo} />
      </ContainerHeader>
    </header>
  )
}

export default Header;