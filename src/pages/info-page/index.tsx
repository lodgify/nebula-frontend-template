import React, { useContext } from 'react';

import NebulaFlat from '../../assets/img/nebula-flat.png';

import { Logo, LogoHero, PageContainer, Title } from './styles/index.style';
import { addPreSmile } from '../../utils/index.util';

import { CountContext } from '../../index.reducer';

export const InfoPage: React.FC = () => {
  const [count, dispatch] = useContext(CountContext);

  return (
    <PageContainer>
      <LogoHero>
        <Logo className={Logo} src={NebulaFlat} />
      </LogoHero>
      <Title>{addPreSmile(`And here there are more smiles!  ${count}`)}</Title>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
    </PageContainer>
  );
};
