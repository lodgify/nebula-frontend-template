import { Button } from '@lodgify/quarks';
import React from 'react';
import { Link } from 'react-router-dom';

import { Routes } from '../../routes';

import { HeaderContainer } from './styles/index.style';
import { HEADER_PAGE_OBJECT } from './tests/index.page';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Button type={Button.Type.Primary}>
        <Link data-testid={HEADER_PAGE_OBJECT.homeLink} to={Routes.root.link}>
          Home
        </Link>
      </Button>
      <Button type={Button.Type.Danger}>
        <Link data-testid={HEADER_PAGE_OBJECT.universeLink} to={Routes.universe.link}>
          Universe
        </Link>
      </Button>
      <Button>
        <Link data-testid={HEADER_PAGE_OBJECT.milkyWayLink} to={Routes.milkyWay.link}>
          Milky Way
        </Link>
      </Button>
    </HeaderContainer>
  );
};
