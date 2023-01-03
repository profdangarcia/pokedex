import React from 'react';
import { Pokedex } from './components/Pokedex';
import { Wrapper } from './components/Wrapper';

export const App: React.FC = () => {
  return (
    <Wrapper>
      <Pokedex />
    </Wrapper>
  );
};
