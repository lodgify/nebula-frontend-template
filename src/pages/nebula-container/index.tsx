import React from 'react';

import { Header } from '../../components/header';
import { CountProvider } from '../../index.reducer';
import { GlobalStyle } from '../../styles/index.style';

export const Nebula: React.FC = ({ children }) => {
  return (
    <CountProvider>
      <Header />
      <GlobalStyle />
      {children}
    </CountProvider>
  );
};
