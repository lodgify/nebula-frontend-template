import React from 'react';

import { Header } from '../../components/header';
import { GlobalStyle } from '../../styles/index.style';
import { CountProvider } from '../../index.reducer';

export const Nebula: React.FC = ({ children }) => {
  return (
    <CountProvider>
      <Header />
      <GlobalStyle />
      {children}
    </CountProvider>
  );
};
