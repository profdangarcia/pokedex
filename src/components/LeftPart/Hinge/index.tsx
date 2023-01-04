import React from 'react';
import styled from 'styled-components';

export const Hinge: React.FC = () => {
  return (
    <Container>
      <Tip />
      <Middle />
      <Tip />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 8%;
  background: var(--red);
  border-radius: 0 0.5rem 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid white;
`;

const Middle = styled.div`
  height: 80%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const Tip = styled.div`
  width: 8%;
  height: 20%;
`;
