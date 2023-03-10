import React from 'react';
import styled from 'styled-components';
import { Footer } from '../Footer';
import { ViewFinder } from '../ViewFinder';

export const Body: React.FC = () => {
  return (
    <Container>
      <Content>
        <ViewFinder />
        <Footer />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: var(--dark-red);
  border-radius: 0 0 0 3rem;
  padding: 1rem 1.1rem 1.5rem;
  display: flex;
`;

const Content = styled.div`
  width: 100%;
  background: var(--red);
  clip-path: polygon(0 10%, 36% 10%, 47% 0, 100% 0, 100% 100%, 0 100%);
  margin-top: -20%;
  border-radius: 0.2rem;
  padding: 0 1.5rem 1.5rem;
`;
