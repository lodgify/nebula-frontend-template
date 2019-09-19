import React from 'react';
import { Link } from 'react-router-dom';

import { RouteContext } from '../../index';

import { HeaderElement, HeaderContainer, HeaderLink } from './styles/index.style';

export const Header: React.FC = () => {
  return (
    <RouteContext.Consumer>
      {({ baseUrl }) => {
        return (
          <HeaderContainer>
            <HeaderElement>
              <HeaderLink>
                <Link to={`/${baseUrl}/`}>Home</Link>
              </HeaderLink>
            </HeaderElement>
            <HeaderElement>
              <HeaderLink>
                <Link to={`/${baseUrl}/info/`}>Info</Link>
              </HeaderLink>
            </HeaderElement>
          </HeaderContainer>
        );
      }}
    </RouteContext.Consumer>
  );
};
