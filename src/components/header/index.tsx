import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@lodgify/quarks';

import { HeaderContainer } from './styles/index.style';

import { Routes } from '../../routes';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Button type={Button.Type.Primary}>
        {/* <HeaderLink href={Routes.root.link}>Home</HeaderLink> */}
        <Link to={Routes.root.link}>Home</Link>
      </Button>
      <Button type={Button.Type.Danger}>
        {/* <HeaderLink href={Routes.info.link}>Info</HeaderLink> */}
        <Link to={Routes.info.link}>Info</Link>
      </Button>
    </HeaderContainer>
  );
};
