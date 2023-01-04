import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--dark-red);
  border-radius: 0 0 2.5rem 0;
  height: 73vh;
  width: 42%;
  clip-path: polygon(0 0, 42% 0, 55% 11%, 100% 11%, 100% 100%, 0 100%);
`;

export const RightPart: React.FC = () => {
  return <Container>right</Container>;
};
