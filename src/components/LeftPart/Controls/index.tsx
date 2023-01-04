import React from 'react';
import styled from 'styled-components';

export const Controls: React.FC = () => {
  return (
    <Container>
      <VerticalControl position="top" />
      <Middle>
        <HorizontalControl position="left" />
        <Core>
          <span />
        </Core>
        <HorizontalControl position="right" />
      </Middle>
      <VerticalControl position="bottom" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Middle = styled.div`
  width: 100%;
  max-width: 7rem;
  display: flex;
  align-items: center;
`;
const Core = styled.div`
  background: var(--gray-800);
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  & > span {
    background: var(--gray-900);
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
`;

const VerticalControl = styled.button<{ position: 'top' | 'bottom' }>`
  background: var(--gray-800);
  width: 2rem;
  height: 2.5rem;
  border-radius: ${props =>
    props.position === 'top' ? '0.3rem 0.3rem 0 0' : '0 0 0.3rem 0.3rem'};
  transition: 0.2s ease-in-out;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  &:active {
    position: relative;
    top: ${props => (props.position === 'top' ? '3px' : '-3px')};
  }
`;

const HorizontalControl = styled.button<{ position: 'left' | 'right' }>`
  height: 2rem;
  width: 2.5rem;
  background: var(--gray-800);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: ${props =>
    props.position === 'left' ? '0.3rem 0 0 0.3rem' : '0 0.3rem 0.3rem 0'};

  &:active {
    position: relative;
    left: ${props => (props.position === 'left' ? '3px' : '-3px')};
  }
`;
