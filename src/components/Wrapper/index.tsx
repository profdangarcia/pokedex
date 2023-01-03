import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  children?: React.ReactNode;
}

export const Wrapper: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};
