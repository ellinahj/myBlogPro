import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function Header() {
  const userColor = useSelector(state => state.common.enteredColor);
  return (
    <HeadWrap userColor={userColor}>
      <Logo>Logo</Logo>
    </HeadWrap>
  );
}

const HeadWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 767px;
  height: 60px;
  display: flex;
  align-items: center;
  background-image: linear-gradient(90deg, ${props => props.userColor}, #e68ca7);
  z-index: 101;
  box-sizing: border-box;
  border-left: 1px solid #dedede;
  border-right: 1px solid #dedede;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-left: 20px;
`;
