import React from 'react';
import styled from 'styled-components';

export const Body: React.FC = () => {
  return <Container>aaa</Container>;
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: var(--red);
  border-radius: 0 0 0 3rem;
  padding: 0 0rem 1rem 1rem;
  display: flex;
  justify-content: space-between;
`;
