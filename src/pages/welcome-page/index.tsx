import React from "react";

import NebulaImg from "../../assets/img/nebula.png";

import { Title, Logo, LogoHero, PageContainer } from "./styles/index.style";
import { shinifyText } from "./utils/index.util";
import { GITHUB_URL } from "./constants";

const WelcomePage: React.FC = () => {
  return (
    <PageContainer>
      <LogoHero>
        <a
          href={GITHUB_URL}
          target="_blank"
          aria-label="Go to the official GitHub page!"
        >
          <Logo className={Logo} src={NebulaImg} />
        </a>
      </LogoHero>
      <Title>{shinifyText("Welcome to the Nebula Front-End Template!")}</Title>
    </PageContainer>
  );
};

export default WelcomePage;
