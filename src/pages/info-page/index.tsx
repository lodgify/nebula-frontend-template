import React, { useContext } from 'react';
import { Button } from '@lodgify/quarks';

import NebulaFlat from '../../assets/img/nebula-flat.png';
import { addPreSmile } from '../../utils/index.util';

import { Logo, LogoHero, PageContainer, Title } from './styles/index.style';
import { CountContext } from '../../index.reducer';

export const InfoPage: React.FC = () => {
  const [count, dispatch] = useContext(CountContext);
  return (
    <PageContainer>
      <LogoHero>
        <Logo className={Logo} src={NebulaFlat} />
      </LogoHero>
      <Title>{addPreSmile('And here there are more smiles!')}</Title>
      <p>{count}</p>
      <Button
        onClick={() => dispatch({ type: 'increment' })}
        style={{ width: '30%', alignSelf: 'center' }}
        theme={Button.Theme.Dark}
      >
        +1
      </Button>
    </PageContainer>
  );
};
