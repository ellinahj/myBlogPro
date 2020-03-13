import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';

function MyList() {
  const value = useSelector(state => state.counter.number);
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
      <MenuWrap isSticky={isSticky}>Menu</MenuWrap>
      <List>내용{value}</List>
    </MyListWrap>
  );
}

export default MyList;
const MyListWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const MenuWrap = styled.div`
  width: 100%;
  max-width: 767px;
  height: 60px;
  background-color: #fff;
  position: relative;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  ${props =>
    props.isSticky &&
    css`
      position: fixed;
      top: 60px;
      z-index: 100;
    `}
`;
const List = styled.div`
  width: 100%;
  height: 1000px;
  position: relative;
`;
