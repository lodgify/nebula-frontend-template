import React, { useContext } from 'react';
import { Button } from '@lodgify/quarks';

import NebulaImg from '../../assets/img/nebula.png';

import { GITHUB_URL } from './constants';
import { Logo, LogoHero, PageContainer, Title } from './styles/index.style';
import { shinifyText } from './utils/index.util';

import { CountContext } from '../../index.reducer';

export const WelcomePage: React.FC = () => {
  const [count, dispatch] = useContext(CountContext);

  return (
    <PageContainer>
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
      <Title>
        {shinifyText(`Hey! Welcome to nebula! Can I get some clicks? Now I have ${count}`)}
      </Title>
      <Button
        onClick={() => dispatch({ type: 'increment' })}
        type={Button.Type.Primary}
        theme={Button.Theme.Light}
      >
        +1
      </Button>
    </PageContainer>
  );
};
