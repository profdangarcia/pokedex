import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--dark-red);
  border-radius: 3rem 0 0 3rem;
  height: 80vh;
  width: 50%;
`;

const Header = styled.div`
  clip-path: polygon(
    0 0,
    100% 0,
    100% 90%,
    92% 90%,
    92% 40%,
    47% 39%,
    36% 66%,
    0 66%
  );
  background: var(--red);
  border-left: 2px solid white;
  height: 15rem;
  border-radius: 3rem 0 0 0;
`;

export const LeftPart: React.FC = () => {
  return (
    <Container>
      <Header>aaaaaa</Header>
    </Container>
  );
};
