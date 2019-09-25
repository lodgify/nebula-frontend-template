import React from 'react';

import { RouteContext } from '../../index';

import { HeaderElement, HeaderContainer, HeaderLink } from './styles/index.style';

export const Header: React.FC = () => {
  return (
    <RouteContext.Consumer>
      {({ baseUrl }) => {
        return (
          <HeaderContainer>
            <HeaderElement>
              <HeaderLink href={`/#/${baseUrl}/`}>Home</HeaderLink>
            </HeaderElement>
            <HeaderElement>
              <HeaderLink href={`/#/${baseUrl}/info/`}>Info</HeaderLink>
            </HeaderElement>
          </HeaderContainer>
        );
      }}
    </RouteContext.Consumer>
  );
};
