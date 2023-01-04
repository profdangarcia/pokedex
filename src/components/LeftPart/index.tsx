import React from 'react';
import styled from 'styled-components';
import { Body } from './Body';
import { Header } from './Header';
import { Hinge } from './Hinge';

export const LeftPart: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header />
        <Body />
      </Content>
      <Hinge />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background: var(--dark-red);
  border-radius: 3rem 0.5rem 0.5rem 3rem;
  height: 80vh;
  width: 50%;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
