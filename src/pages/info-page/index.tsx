import React from 'react';

import NebulaFlat from '../../assets/img/nebula-flat.png';

import { Logo, LogoHero, PageContainer, Title } from './styles/index.style';
import { addPreSmile } from '../../utils/index.util';

export const InfoPage: React.FC = () => {
  return (
    <PageContainer>
      <LogoHero>
        <Logo className={Logo} src={NebulaFlat} />
      </LogoHero>
      <Title>{addPreSmile('Yep, another page!')}</Title>
    </PageContainer>
  );
};
