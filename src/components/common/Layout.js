import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Header from './Header';
import BottomMenu from './BottomMenu';

export default function Layout({ children }) {
  const [isScrollDown, setScollDown] = useState(true);
  const prevScroll = useRef(0);
  const handle = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll === 0 || currentScroll > prevScroll.current) {
      setScollDown(true);
    } else {
      setScollDown(false);
    }
    prevScroll.current = currentScroll;
  };

  useEffect(() => {
    window.addEventListener('scroll', handle);
    return () => {
      window.removeEventListener('scroll', handle);
    };
  }, []);
  return (
    <LayoutWrap>
      <Header />
      {children}
      <BottomMenu isScrollDown={isScrollDown} />
    </LayoutWrap>
  );
}

const LayoutWrap = styled.div`
  width: 100%;
  max-width: 767px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  background-color: #fff;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
`;
