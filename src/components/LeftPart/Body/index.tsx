import React from 'react';
import styled from 'styled-components';

export const Body: React.FC = () => {
  return (
    <Container>
      <Content>Content</Content>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: var(--dark-red);
  border-radius: 0 0 0 3rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  width: 100%;
  background: var(--red);
  border: 1px solid black;
  clip-path: polygon(0 10%, 36% 10%, 47% 0, 100% 0, 100% 100%, 0 100%);
  margin-top: -20%;
  border-radius: 0.1rem;
`;
