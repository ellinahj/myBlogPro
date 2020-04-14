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
      <Container>
        <Main>{children}</Main>
      </Container>
      <BottomMenu isScrollDown={isScrollDown} />
    </LayoutWrap>
  );
}

const LayoutWrap = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 60px;
  background-color: #fff;
  /* box-sizing: border-box; */
`;

const Container = styled.div`
  padding-bottom: 30px;
  /* box-sizing: border-box; */
`;
const Main = styled.div`
  position: relative;
`;
