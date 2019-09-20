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
              <HeaderLink>
                <a href={`/#/${baseUrl}/`}>Home</a>
              </HeaderLink>
            </HeaderElement>
            <HeaderElement>
              <HeaderLink>
                <a href={`/#/${baseUrl}/info/`}>Info</a>
              </HeaderLink>
            </HeaderElement>
          </HeaderContainer>
        );
      }}
    </RouteContext.Consumer>
  );
};
