import React from 'react';
import styled from 'styled-components';
import { TopControls } from './TopControls';

export const RightPart: React.FC = () => {
  return (
    <Container>
      <Content>
        <TopControls />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--dark-red);
  border-radius: 0 0 2.5rem 0;
  height: 73vh;
  width: 42%;
  clip-path: polygon(0 0, 42% 0, 55% 11%, 100% 11%, 100% 100%, 0 100%);
  padding: 1.2rem 1.1rem 1.5rem;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  background: var(--red);
  clip-path: polygon(0 0, 42% 0, 55% 11%, 100% 11%, 100% 100%, 0 100%);
  border-radius: 0.2rem;
  padding: 0 1.5rem 1.5rem;
`;
