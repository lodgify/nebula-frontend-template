import styled from 'styled-components';

import { NebulaBackground } from './animated-background.style';

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${NebulaBackground};
`;

export const Title = styled.h1`
  font-size: 2em;
  font-weight: lighter;
  text-align: center;
  background-image: linear-gradient(90deg, #282184, #03be7b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const LogoHero = styled.section`
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  transition: 0.3s ease-in-out all;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
