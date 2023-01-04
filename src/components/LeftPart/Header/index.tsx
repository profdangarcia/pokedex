import React from 'react';
import styled from 'styled-components';

export const Header: React.FC = () => {
  return (
    <Container>
      <BlueLight />
      <LightsBox>
        <Light color="dark-red" />
        <Light color="yellow" />
        <Light color="green" />
      </LightsBox>
    </Container>
  );
};

const Container = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 40%, 47% 40%, 36% 80%, 0 80%);
  background: var(--red);
  border-left: 2px solid white;
  height: 13rem;
  border-radius: 3rem 0 0 0;
  display: flex;
`;

const BlueLight = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: var(--light-blue);
  border: 0.4rem solid white;
  margin: 1.5rem 0 0 2rem;
`;

const LightsBox = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0.8rem 0 0 0.5rem;
`;

const Light = styled.div<{ color: string }>`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background: ${props => `var(--${props.color})`};
  border: 1px solid var(--gray-200);
`;
