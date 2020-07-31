import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import { useSelector } from 'react-redux';

export default function BottomMenu({ isScrollDown }) {
  const userColor = useSelector(state => state.common.userColor);
  return (
    <BottomMenuWrap isScrollDown={isScrollDown}>
      <BottomMenuSize userColor={userColor} onClick={() => Router.push('/post')}>
        add
        {/* <svg
          onClick={() => Router.push('/post')}
          height="40"
          viewBox="0 0 512 512"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
            fill={userColor}
          />
          <path
            d="m368 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0"
            fill="#fafafa"
          />
        </svg> */}
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
  bottom: 15px;
  z-index: 100;
  transform: translateX(-50%);
  svg {
    cursor: pointer;
  }
`;
const BottomMenuSize = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 44px;
  height: 44px;
  color: #fff;
  border-radius: 22px;
  background: ${props => props.userColor || '#ccc'};
  cursor: pointer;
`;
// const AddFont = styled.div`
//   width: 44px;
//   height: 44px;
//   color: #fff;
//   border-radius: 22px;
//   background: ${props => props.userColor || '#ccc'};
// `;
