import React from 'react';

import { HeaderElement, HeaderContainer, HeaderLink } from './styles/index.style';

import { Routes } from '../../routes';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderElement>
        <HeaderLink href={Routes.root.link}>Home</HeaderLink>
      </HeaderElement>
      <HeaderElement>
        <HeaderLink href={Routes.info.link}>Info</HeaderLink>
      </HeaderElement>
    </HeaderContainer>
  );
};
