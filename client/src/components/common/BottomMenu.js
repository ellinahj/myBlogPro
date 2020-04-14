import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

// images
import imgHome from '../../../static/images/home.svg';
import hamburger from '../../../static/images/hamburger.svg';
import search from '../../../static/images/search.svg';
import settings from '../../../static/images/settings.svg';

export default function BottomMenu({ isScrollDown }) {
  return (
    <BottomMenuWrap isScrollDown={isScrollDown}>
      <BottomMenuSize>
        <Link href="/">
          <Img src={imgHome} width={28} />
        </Link>
        <Link href="/list">
          <Img src={hamburger} width={35} />
        </Link>
        <Link href="/search">
          <Img src={search} />
        </Link>
        <Link href="/mypage">
          <Img src={settings} width={30} />
        </Link>
      </BottomMenuSize>
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
  width: 239px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  border-radius: 30px;
  padding: 0 16px;
  background-color: #fff;
  border: 1px solid #ddd;
`;
const Img = styled.img`
  width: ${props => props.width || '32px'};
  height: ${props => props.width || '32px'};
  cursor: pointer;
`;
