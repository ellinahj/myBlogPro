import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import Component_ImageSlider from '../common/ImageSlider';
import Button from '../common/Button';
import add from '../../../static/images/add.svg';
import Router from 'next/router';
import useRequest from '../../../src/hooks/useRequest';
import spinner from '../../../static/images/spinner.svg';
import slide1 from '../../../static/images/slide1.jpg';
import CardImg from '../common/CardImg';

function MyList() {
  const userColor = useSelector(state => state.common.enteredColor);
  const [menuIndex, setMenuIndex] = useState(0);
  // console.log(userColor);
  const [isSticky, setSticky] = useState(false);
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
  const [loading, response, error] = useRequest('https://jsonplaceholder.typicode.com/posts');
  console.log(loading, response, error);
  if (!loading && !response) {
    return null;
  }
  console.log(isSticky, 'stidy');
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
            <AddBtnname>추가</AddBtnname>
          </AddArea>
          {/* <Component_ImageSlider /> */}
          {/* {response && <div>response.data[0].title</div>} */}
          {/* <div>{response && response.data[0].title}</div> */}
          {/* <Card res={response} src={slide1} alt="이미지1" /> */}
          {response &&
            response.data.map(item => {
              return (
                // <ImageWrap>
                //   {/* <Image src={props.src} alt={props.alt} /> */}
                //   <ImageCover />
                //   <OnTextWrap>
                //     <Date>20.03.25</Date>
                //     <Title>{item.title}</Title>
                //     <CardContent>{item.body}</CardContent>
                //   </OnTextWrap>
                // </ImageWrap>
                <CardWrap>
                  <div>{item.title}</div>
                  <div>{item.body}</div>
                </CardWrap>
              );
            })}
        </Content>
      </ListArea>
      {loading && <LoadingState src={spinner} />}
      {error && <div>에러발생!</div>}
    </MyListWrap>
  );
}

export default MyList;
const CardWrap = styled.div`
  width: 500px;
  min-height: 700px;
  margin: 0 auto 30px;
  border: 1px solid #ddd;
`;
const MyListWrap = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: scroll;
`;
const MenuWrap = styled.div`
  width: 100%;
  max-width: 765px;
  height: 60px;
  overflow-x:scroll;
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
