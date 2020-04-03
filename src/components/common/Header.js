import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { colorLuminance } from '../../../src/js/common';

export default function Header() {
  const userColor = useSelector(state => state.common.enteredColor);
  const luminantColor = colorLuminance(userColor, 0.7);
  return (
    <HeadWrap userColor={userColor} luminantColor={luminantColor}>
      <Logo>Logo</Logo>
    </HeadWrap>
  );
}

const HeadWrap = styled.header`
  width: 100%;
  max-width: 765px;
  height: 60px;
  position: fixed;
  top: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-image: linear-gradient(90deg, ${props => props.userColor}, ${props => props.luminantColor});
  z-index: 101;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-left: 20px;
`;
