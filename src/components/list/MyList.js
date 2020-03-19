import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';

function MyList() {
  const value = useSelector(state => state.common.number);
  const [isSticky, setSticky] = useState(false);
  console.log(value);
  const handleScroll = () => {
    if (window.pageYOffset >= 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <MyListWrap>
      <MenuWrap isSticky={isSticky}>
        <Menu>메뉴1</Menu>
        <Menu>메뉴2</Menu>
        <Menu>메뉴3</Menu>
      </MenuWrap>
      <List>내용</List>
    </MyListWrap>
  );
}

export default MyList;
const MyListWrap = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`;
const MenuWrap = styled.div`
  width: 100%;
  max-width: 765px;
  height: 60px;
  background-color: #fff;
  position: relative;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${props =>
    props.isSticky &&
    css`
      position: fixed;
      top: 60px;
      z-index: 100;
    `}
`;
const Menu = styled.div`
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
const List = styled.div`
  width: 100%;
  height: 100%;
`;
