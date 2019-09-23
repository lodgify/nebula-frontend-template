import React from 'react';
import NebulaImg from '../../assets/img/nebula.png';

import { GITHUB_URL } from './constants';
import { Logo, LogoHero, PageContainer, Title } from './styles/index.style';
import { shinifyText } from './utils/index.util';

import { Example05 } from './index.reducer';

export const WelcomePage: React.FC = () => {
  return (
    <PageContainer>
      <Example05 />
      <LogoHero>
        <a
          href={GITHUB_URL}
          target="_blank"
          aria-label="Go to the official GitHub page!"
          rel="noopener noreferrer"
        >
          <Logo className={Logo} src={NebulaImg} />
        </a>
      </LogoHero>
      <Title>{shinifyText('Welcome to the Nebula Front-End Template!')}</Title>
    </PageContainer>
  );
};
