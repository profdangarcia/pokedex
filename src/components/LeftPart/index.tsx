import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';

export const LeftPart: React.FC = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--dark-red);
  border-radius: 3rem 0 0 3rem;
  height: 80vh;
  width: 50%;
`;
