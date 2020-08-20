import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Header from './Header';
import BottomMenu from './BottomMenu';
import { useSelector } from 'react-redux';
import { theme } from '../../utils/theme';

export default function Layout({ children }) {
  const [isScrollDown, setScollDown] = useState(true);
  const prevScroll = useRef(0);

  const loading = useSelector(state => state.common.loading);
  const userColor = useSelector(state => state.common.userColor);
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

  return (
    <LayoutWrap>
      {loading ? (
        <Loading>
          <LoadingText userColor={userColor}>loading...</LoadingText>
        </Loading>
      ) : null}
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
  position: relative;
`;

const Container = styled.div``;
const Main = styled.div`
  position: relative;
`;

const Loading = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background: #fff;
`;
const LoadingText = styled.div`
  position: fixed;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  margin: 20px 0 0 -45px;
  font-size: ${theme.lFont};
  color: ${props => props.userColor};
`;
