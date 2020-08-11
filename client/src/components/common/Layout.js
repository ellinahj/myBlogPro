import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Header from './Header';
import BottomMenu from './BottomMenu';
import { useSelector } from 'react-redux';

export default function Layout({ children }) {
  const [isScrollDown, setScollDown] = useState(true);
  const prevScroll = useRef(0);

  const handle = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll === 0 || currentScroll < prevScroll.current) {
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

  const loading = useSelector(state => state.common.loading);
  return (
    <LayoutWrap>
      {/* {loading ? <Loading>loading...</Loading> : null} */}
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
  position: relative;
  max-width: 765px;
  margin: 0 auto;
`;

const Container = styled.div`
  padding-bottom: 30px;
`;
const Main = styled.div`
  position: relative;
`;

const Loading = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
