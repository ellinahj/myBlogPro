import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import Component_ImageSlider from '../common/ImageSlider';
import Button from '../common/Button';
import add from '../../../static/images/add.svg';
import Router from 'next/router';

function MyList() {
  const userColor = useSelector(state => state.common.enteredColor);
  const [menuIndex, setMenuIndex] = useState(0);
  console.log(userColor);
  const [isSticky, setSticky] = useState(false);
  // console.log(value);
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
  const handleClick = index => {
    setMenuIndex(index);
  };
  return (
    <MyListWrap luminantColor>
      <MenuWrap isSticky={isSticky}>
        <Menu onClick={e => handleClick(1)}>
          메뉴1
          <MenuBorder userColor={userColor} active={menuIndex === 1} />
        </Menu>
        <Menu onClick={e => handleClick(2)}>
          메뉴2
          <MenuBorder userColor={userColor} active={menuIndex === 2} />
        </Menu>
        <Menu onClick={e => handleClick(3)}>
          메뉴3
          <MenuBorder userColor={userColor} active={menuIndex === 3} />
        </Menu>
      </MenuWrap>
      {/* List*/}
      <ListArea>
        <Content>
          <AddArea onClick={() => Router.push('/list/add')}>
            <Btn_Write src={add} />
            <Title>추가</Title>
          </AddArea>
          <Component_ImageSlider />
        </Content>
      </ListArea>
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
    &:nth-child(${props => props.index}) {
      :last-child::after{
       
      }
    }
`;
const Menu = styled.div`
  position: relative;
  :hover {
    cursor: pointer;
  }
`;
const MenuBorder = styled.div`
  ${({ active }) =>
    active &&
    css`
      width: 100%;
      height: 6px;
      position: absolute;
      background-color: ${props => props.userColor};
      bottom: 0.5px;
      opacity: 0.3;
    `}
`;
const ListArea = styled.div`
  width: 100%;
  height: 100%;
`;
const Content = styled.section`
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
const AddArea = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-bottom: 25px;
  margin-top: 7px;
  cursor: pointer;
`;
const Title = styled.div`
  font-size: 17px;
  color: #888;
  margin-left: 5px;
`;
const Btn_Write = styled.img``;
