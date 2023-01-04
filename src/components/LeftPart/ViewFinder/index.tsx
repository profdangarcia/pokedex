import React from 'react';
import styled from 'styled-components';

export const ViewFinder: React.FC = () => {
  return (
    <Container>
      <Top>
        <RedLight />
        <RedLight />
      </Top>

      <Screen />

      <Bottom>
        <RedLight size="bg" />
        <Speaker>
          <SpeakerLine />
          <SpeakerLine />
          <SpeakerLine />
          <SpeakerLine />
        </Speaker>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 18%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%, 0 80%);
  width: 100%;
  height: 60%;
  background: var(--gray-50);
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem 0.5rem 0.5rem 0;
  padding: 1rem 0;
`;

const Top = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
`;

const RedLight = styled.div<{ size?: 'sm' | 'bg' }>`
  background: var(--red);
  width: ${props => (props.size === 'bg' ? '2.5rem' : '1.3rem')};
  height: ${props => (props.size === 'bg' ? '2.5rem' : '1.3rem')};
  border-radius: 50%;
`;

const Screen = styled.div`
  clip-path: polygon(4% 0, 100% 0, 100% 100%, 4% 100%, 0 95%, 0 5%);
  align-self: center;
  background: var(--gray-900);
  border-radius: 0.5rem;
  width: 80%;
  height: 70%;
  margin: 0.5rem 0 1rem;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-self: center;
  align-items: center;
  padding-left: 2rem;
`;

const Speaker = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 0.5rem;
`;

const SpeakerLine = styled.div`
  height: 0.3rem;
  width: 100%;
  background: var(--gray-200);
  border-radius: 0.3rem;
  flex-shrink: 0;
`;
