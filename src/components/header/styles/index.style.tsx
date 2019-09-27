import styled from 'styled-components';

import { HeaderBackground } from './animated-background.style';
import { LinkBackground } from './animated-link-background.style';

export const HeaderContainer = styled.nav`
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  ${HeaderBackground};
`;

export const HeaderElement = styled.div`
  width: 10em;
  margin: 0 1em;
  display: flex;
  jsutify-items: center;
  align-items: center;
  background-image: linear-gradient(90deg, #ffd90d, #be6403);
  border: 0;
  transition: 0.1s ease-out all;
  &:hover {
    transform: scale(0.95);
    ${LinkBackground}
  }
`;
