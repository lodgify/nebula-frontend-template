import React, { useContext } from 'react';
import { Button } from '@lodgify/quarks';

import NebulaBlue from '../../assets/img/nebula-blue.png';

import { Logo, LogoHero, PageContainer, Title, Subtitle } from './styles/index.style';
import { CountContext } from '../../index.reducer';
import { shinifyText } from '../welcome-page/utils/index.util';

export const MilkyWayPage: React.FC = () => {
  const { count, dispatch } = useContext(CountContext);
  return (
    <PageContainer>
      <LogoHero>
        <Logo className={Logo} src={NebulaBlue} />
      </LogoHero>
      <Title>{shinifyText('We love the Milky Way!')}</Title>
      <Subtitle>{`Now we have ${count} smiles!`}</Subtitle>
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
