import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@lodgify/quarks';

import { HeaderContainer } from './styles/index.style';

import { Routes } from '../../routes';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Button type={Button.Type.Primary}>
        <Link to={Routes.root.link}>Home</Link>
      </Button>
      <Button type={Button.Type.Danger}>
        <Link to={Routes.universe.link}>Info</Link>
      </Button>
      <Button>
        <Link to={Routes.milky_way.link}>Milky Way</Link>
      </Button>
    </HeaderContainer>
  );
};
