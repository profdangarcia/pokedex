import React from 'react';
import styled from 'styled-components';
import { LeftPart } from '../LeftPart';
import { RightPart } from '../RightPart';

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  max-width: 60vw;
`;

export const Pokedex: React.FC = () => {
  return (
    <Container>
      <LeftPart />
      <RightPart />
    </Container>
  );
};
