import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderElement, HeaderContainer, HeaderLink } from './styles/index.style';

export const Header: React.FC = () => (
  <HeaderContainer>
    <HeaderElement>
      <HeaderLink>
        <Link to={`/`}>Home</Link>
      </HeaderLink>
    </HeaderElement>
    <HeaderElement>
      <HeaderLink>
        <Link to={`/info/`}>Info</Link>
      </HeaderLink>
    </HeaderElement>
  </HeaderContainer>
);
