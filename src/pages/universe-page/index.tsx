import React, { useContext } from 'react';
import { Button } from '@lodgify/quarks';

import NebulaFlat from '../../assets/img/nebula-flat.png';
import { CountContext } from '../../index.reducer';
import { addPreSmile } from '../../utils/index.util';

import { Logo, LogoHero, PageContainer, Title, Subtitle } from './styles/index.style';
import { UNIVERSE_PAGE_OBJECT } from './tests/index.page';

export const UniversePage: React.FC = () => {
  const context = useContext(CountContext);
  const count = context[0];
  const dispatch = context[1];

  return (
    <PageContainer>
      <LogoHero>
        <Logo className={Logo} src={NebulaFlat} />
      </LogoHero>
      <Title>{addPreSmile('And here there are more smiles!')}</Title>
      <Subtitle
        data-testid={UNIVERSE_PAGE_OBJECT.subtitle}
      >{`Now we have ${count} smiles!`}</Subtitle>
      <Button
        onClick={() => dispatch({ type: 'increment' })}
        style={{ width: '30%', alignSelf: 'center' }}
        theme={Button.Theme.Dark}
        testId={UNIVERSE_PAGE_OBJECT.ctaButton}
      >
        +1
      </Button>
    </PageContainer>
  );
};
