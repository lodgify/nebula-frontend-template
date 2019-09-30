import React, { useContext } from 'react';
import { Button } from '@lodgify/quarks';

import NebulaImg from '../../assets/img/nebula.png';

import { GITHUB_URL } from './constants';
import { WELCOME_PAGE_OBJECT } from './tests/index.page';
import { Logo, LogoHero, PageContainer, Title, Subtitle } from './styles/index.style';
import { shinifyText } from './utils/index.util';

import { CountContext } from '../../index.reducer';

export const WelcomePage: React.FC = () => {
  const context = useContext(CountContext);
  const count = context[0];
  const dispatch = context[1];

  return (
    <PageContainer>
      <LogoHero>
        <a
          href={GITHUB_URL}
          target="_blank"
          aria-label="Go to the official GitHub page!"
          rel="noopener noreferrer"
          data-testid={WELCOME_PAGE_OBJECT.repoLink}
        >
          <Logo className={Logo} src={NebulaImg} />
        </a>
      </LogoHero>
      <Title>{shinifyText(`Hey! Welcome to nebula! Can I get some smiles?`)}</Title>
      <Subtitle
        data-testid={WELCOME_PAGE_OBJECT.subtitle}
      >{`Now we have ${count} smiles!`}</Subtitle>
      <Button
        onClick={() => dispatch({ type: 'increment' })}
        style={{ width: '30%', alignSelf: 'center' }}
        type={Button.Type.Primary}
        theme={Button.Theme.Light}
        testId={WELCOME_PAGE_OBJECT.ctaButton}
      >
        +1
      </Button>
    </PageContainer>
  );
};
