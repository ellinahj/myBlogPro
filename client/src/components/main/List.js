import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Search from './Search';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Component_ImageSlider from '../common/ImageSlider';
import Button from '../common/Button';
import add from '../../../static/images/add.svg';
import Router from 'next/router';
import useRequest from '../../hooks/useRequest';
import spinner from '../../../static/images/spinner.svg';
import slide1 from '../../../static/images/slide1.jpg';
import CardImg from '../common/CardImg';
import { setUserInfo } from '../../actions/base';

function MyList(props) {
  const { luminantColor, isSticky, userColor, menuIndex, category } = props;
  return (
    <MyListWrap luminantColor>
      <MenuWrap isSticky={isSticky}>
        {category &&
          category.length > 0 &&
          category.map((item, index) => {
            return (
              <Menu onClick={e => props.handleMenuClick(index)} key={index}>
                {item.title}
                <MenuBorder userColor={userColor} active={menuIndex === index} />
              </Menu>
            );
          })}
      </MenuWrap>
      {/* List*/}
      <ListArea>
        <Content>
          {/* <AddArea onClick={() => Router.push('/post')}>
            <Btn_Write src={add} />
            <AddBtnname>추가</AddBtnname>
          </AddArea> */}
          <Search />
          <CardContainer>
            {/* <Component_ImageSlider /> */}
            {/* {response && <div>response.data[0].title</div>} */}
            {/* <div>{response && response.data[0].title}</div> */}
            {/* <Card res={response} src={slide1} alt="이미지1" /> */}

            {/* {response &&
              response.data.map(item => {
                return (
                  <CardWrap>
                    <CardImg item={item} />
                  </CardWrap>
                );
              })} */}
            <ul id="list">
              {/* {props.state.map((img, i) => (
                <li style={{ backgroundImage: `url(${img})` }} key={i} />
              ))} */}
            </ul>
          </CardContainer>
        </Content>
      </ListArea>
      {/* {loading && <LoadingState src={spinner} />}
      {error && <div>에러발생!</div>} */}
    </MyListWrap>
  );
}

export default MyList;
const CardWrap = styled.div`
  float: left;
  width: calc(50% - 10px);
  min-height: auto;
  margin-bottom: 20px;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
  /* box-sizing: border-box; */
  :nth-child(2n) {
    margin-left: 20px;
  }
`;
const CardContainer = styled.div`
  li {
    display: inline-block;
    width: 100%;
    height: 200px;
    background-size: cover;
  }

  #block {
    width: 100%;
    height: 700px;
  }

  #list {
    width: 100%;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    /* height: 600px;
  overflow: scroll; */
  }
`;
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
  padding: 30px;
  box-sizing: border-box;
  /* overflow: auto; */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const AddArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;
  margin: 7px 0 25px;
  cursor: pointer;
`;
const AddBtnname = styled.div`
  font-size: 17px;
  color: #888;
  margin-left: 5px;
`;
const Btn_Write = styled.img``;
const LoadingState = styled.img`
  position: absolute;
  z-index: 101;
  width: 64px;
  height: 64px;
  top: 50%;
  left: 50%;
`;
const ImageWrap = styled.div`
  /* display: inline-block;
  position: relative; */
  width: 100px;
  height: 200px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const ImageCover = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(#fff, #000);
`;
const OnTextWrap = styled.div`
  color: #000;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 13px;
  display: flex;
  flex-direction: column;
`;
const Date = styled.div``;
const Title = styled.div`
  font-size: ${props => props.theme.lFont};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  height: 2em;
  line-height: 2em;
`;
const CardContent = styled.div`
  font-size: ${props => props.theme.mFont};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.6em;
  height: 3.2em;
`;
