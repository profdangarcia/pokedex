import React from 'react';
import styled from 'styled-components';

export const Body: React.FC = () => {
  return <Container></Container>;
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: var(--dark-red);
  border-radius: 0 0 0 3rem;
`;
