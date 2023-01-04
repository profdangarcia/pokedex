import React from 'react';
import styled from 'styled-components';

export const BottomControls: React.FC = () => {
  return (
    <Container>
      <Top>
        <ArrowControls>
          <Arrow />
          <Arrow />
        </ArrowControls>
        <Light className="shiny" />
      </Top>
      <Bottom>
        <Touch />
        <Touch />
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  flex-direction: column;
  gap: 2.5rem;
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

const ArrowControls = styled.div`
  width: 100%;
  display: flex;
  gap: 0.1rem;

  & > :nth-of-type(1) {
    border-radius: 0.5rem 0 0 0.5rem;
  }
  & > :nth-of-type(2) {
    border-radius: 0 0.5rem 0.5rem 0;
  }
`;

const Arrow = styled.button`
  background: var(--gray-50);
  width: 20%;
  height: 3.5rem;
  background-image: url('./velvet.png');
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  &:active {
    transform: scale(0.98);
  }
`;

const Light = styled.div`
  height: 60%;
  width: 10%;
  border-radius: 50%;
  background: var(--yellow);
  margin-right: 0.5rem;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Touch = styled.button`
  border-radius: 0.5rem;
  width: 40%;
  height: 3.5rem;
  background-color: var(--gray-800);
  background-image: url('./velvet.png');
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  &:active {
    transform: scale(0.98);
  }
`;
