import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import { useSelector } from 'react-redux';

// images
import imgHome from '../../../static/images/home.svg';
import hamburger from '../../../static/images/hamburger.svg';
import search from '../../../static/images/search.svg';
import settings from '../../../static/images/settings.svg';
import add from '../../../static/images/add.svg';

export default function BottomMenu({ isScrollDown }) {
  const userColor = useSelector(state => state.common.enteredColor);
  return (
    <BottomMenuWrap isScrollDown={isScrollDown}>
      <BottomMenuSize>
        <svg
          onClick={() => Router.push('/post')}
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 30 30"
          stroke={userColor}
          strokeWidth="1"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
          cursor="pointer"
        >
          <path d="M17 12L7 12M12 17L12 7" />
          <circle cx="12" cy="12" r="10" />
        </svg>
        {/* <Img onClick={() => Router.push('/post')} src={add} width={40} /> */}
        {/* <AddBtnname>추가</AddBtnname> */}
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
  display: flex;
  align-items: center;

  box-sizing: border-box;
`;
const Img = styled.img`
  width: ${props => props.width || '32px'};
  height: ${props => props.width || '32px'};
  cursor: pointer;
`;
const AddArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;
  margin: 7px 0 25px;
  cursor: pointer;
`;
