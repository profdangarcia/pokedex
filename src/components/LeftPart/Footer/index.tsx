import React from 'react';
import styled from 'styled-components';
import { Controls } from '../Controls';

export const Footer: React.FC = () => {
  return (
    <Container>
      <Top>
        <RoundButton />
        <SmashButton color="dark-red" />
        <SmashButton color="light-blue" />
      </Top>

      <Bottom>
        <LeftCorner>
          <Dot />
          <Dot />
          <GreenStuff />
        </LeftCorner>
        <Controls />
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.5rem;
`;

const Top = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const RoundButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: var(--gray-800);
  background-image: url('./velvet.png');
  border: 1px solid var(--gray-900);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  &:active {
    transform: scale(0.98);
  }
`;

const SmashButton = styled.button<{ color: string }>`
  height: 1.3rem;
  width: 18%;
  background-image: url('./velvet.png');
  background-color: ${props => `var(--${props.color})`};
  border-radius: 2rem;
  border: 1px solid var(--gray-800);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  &:active {
    transform: scale(0.98);
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  gap: 2rem;
`;

const LeftCorner = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  & > span + span {
    margin-left: 0.5rem;
  }
`;

const Dot = styled.span`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: var(--gray-900);
  background-image: url('./velvet.png');
  flex-shrink: 0;
`;

const GreenStuff = styled.button`
  width: 60%;
  height: 5rem;
  background-color: var(--green);
  border-radius: 0.3rem;
  background-image: url('./velvet.png');
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  &:active {
    transform: scale(0.98);
  }
`;
