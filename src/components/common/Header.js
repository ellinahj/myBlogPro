import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <HeadWrap>
      <Logo>로고</Logo>
    </HeadWrap>
  );
}

const HeadWrap = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 767px;
  height: 60px;
  display: flex;
  align-items: center;
  background-image: linear-gradient(90deg, #fd6067, #e68ca7);
  z-index: 101;
  box-sizing: border-box;
`;

const Logo = styled.div``;
