import { Button } from '@lodgify/quarks';
import React, { useContext } from 'react';

import NebulaBlue from '../../assets/img/nebula-blue.png';
import { CountContext } from '../../index.reducer';
import { shinifyText } from '../welcome-page/utils/index.util';

import { Logo, LogoHero, PageContainer, Subtitle, Title } from './styles/index.style';
import { MILKY_WAY_PAGE_OBJECT } from './tests/index.page';

export const MilkyWayPage: React.FC = () => {
  const context = useContext(CountContext);
  const count = context[0];
  const dispatch = context[1];

  return (
    <PageContainer>
      <LogoHero>
        <Logo className={Logo} src={NebulaBlue} />
      </LogoHero>
      <Title>{shinifyText('We love the Milky Way!')}</Title>
      <Subtitle
        data-testid={MILKY_WAY_PAGE_OBJECT.subtitle}
      >{`Now we have ${count} smiles!`}</Subtitle>
      <Button
        onClick={() => dispatch({ type: 'increment' })}
        style={{ width: '30%', alignSelf: 'center' }}
        theme={Button.Theme.Dark}
        testId={MILKY_WAY_PAGE_OBJECT.ctaButton}
      >
        +1
      </Button>
    </PageContainer>
  );
};
