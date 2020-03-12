import React from 'react';
import styled, { css } from 'styled-components';

export default function BottomMenu({ isScrollDown }) {
  return (
    <BottomMenuWrap isScrollDown={isScrollDown}>
      <BottomMenuSize>메뉴메뉴메뉴메뉴</BottomMenuSize>
    </BottomMenuWrap>
  );
}

const BottomMenuWrap = styled.nav`
  position: fixed;
  display: block;
  ${props =>
    !props.isScrollDown &&
    css`
      display: none;
    `}
  left: 50%;
  bottom: 20px;
  z-index: 100;

  transform: translateX(-50%);
`;
const BottomMenuSize = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 239px;
  height: 56px;
  box-sizing: border-box;
  border-radius: 30px;
  padding: 0 16px;
  background-color: #fff;
  border: 1px solid #ddd;
`;
