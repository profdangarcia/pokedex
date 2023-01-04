import React from 'react';
import styled from 'styled-components';

export const TopControls: React.FC = () => {
  return (
    <Container>
      <View />
      <ButtonsGrid>
        <BlueButton />
        <BlueButton />
        <BlueButton />
        <BlueButton />
        <BlueButton />
        <BlueButton />
        <BlueButton />
        <BlueButton />
        <BlueButton />
        <BlueButton />
      </ButtonsGrid>
      <SubGrid>
        <SmashButton />
        <SmashButton />
      </SubGrid>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 5rem;
  padding-top: 1.5rem;
`;

const View = styled.div`
  background: var(--gray-900);
  border-radius: 0.5rem;
  width: 100%;
  height: 25%;
`;

const ButtonsGrid = styled.div`
  display: grid;
  grid-gap: 0.1rem;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 1.5rem;
  width: 100%;

  & > button:nth-of-type(1) {
    border-radius: 0.5rem 0 0 0;
  }
  & > button:nth-of-type(5) {
    border-radius: 0 0.5rem 0 0;
  }
  & > button:nth-of-type(6) {
    border-radius: 0 0 0 0.5rem;
  }
  & > button:nth-of-type(10) {
    border-radius: 0 0 0.5rem 0;
  }
`;

const BlueButton = styled.button`
  background: var(--light-blue);
  width: 100%;
  height: 3rem;
  &:active {
    transform: scale(0.98);
  }
`;

const SubGrid = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const SmashButton = styled.button`
  background: var(--gray-800);
  height: 0.6rem;
  width: 15%;
  border-radius: 2rem;
  &:active {
    transform: scale(0.98);
  }
`;
