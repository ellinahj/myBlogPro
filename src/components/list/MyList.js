import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import Carousel from 'nuka-carousel';
import slide1 from '../../../static/images/slide1.jpg';
import slide2 from '../../../static/images/slide2.jpg';
import slide3 from '../../../static/images/slide3.jpg';
import slide4 from '../../../static/images/slide4.jpg';
import slide5 from '../../../static/images/slide5.jpg';
function MyList() {
  const userColor = useSelector(state => state.common.enteredColor);
  const [menuIndex,setMenuIndex] = useState(0)
  console.log(userColor)
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
  const handleClick = (index)=>{
    setMenuIndex(index)
  }
  return (
    <MyListWrap luminantColor>
      <MenuWrap isSticky={isSticky}>
        <Menu onClick={(e)=>handleClick(1)}>메뉴1<MenuBorder userColor={userColor} active={menuIndex === 1}/></Menu>
        <Menu onClick={(e)=>handleClick(2)}>메뉴2<MenuBorder userColor={userColor} active={menuIndex === 2}/></Menu>
        <Menu onClick={(e)=>handleClick(3)}>메뉴3<MenuBorder userColor={userColor} active={menuIndex === 3}/></Menu>
      </MenuWrap>
      <List>   
        <MainArea>
        <Title>{menuIndex}번째</Title>
          <Carousel slidesToShow={3} cellSpacing={15} cellAlign="left" slideWidth={0.95}>
            <img src={slide1} alt="메인 슬라이드이미지1" />
            <img src={slide2} alt="메인 슬라이드이미지2" />
            <img src={slide3} alt="메인 슬라이드이미지3" />
            <img src={slide4} alt="메인 슬라이드이미지4" />
            <img src={slide5} alt="메인 슬라이드이미지5" />
            <img src={slide1} alt="메인 슬라이드이미지1" />
            <img src={slide2} alt="메인 슬라이드이미지2" />
            <img src={slide3} alt="메인 슬라이드이미지3" />
            <img src={slide4} alt="메인 슬라이드이미지4" />
            <img src={slide5} alt="메인 슬라이드이미지5" />
          </Carousel>
        </MainArea>
    </List>
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
    &:nth-child(${props=>props.index}) {
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

  ${({active}) => active && css`
  width: 100%;
    height: 6px;
    position: absolute;
    background-color: ${props=>props.userColor};
    bottom: 0.5px;
    opacity: 0.3;
    `}
 
`
const List = styled.div`
  width: 100%;
  height: 100%;
`;

//
const MainArea = styled.section`
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .slider-slide {
    width: 100%;
  }
  .slide-visible {
    width: 100%;
  }
  .slider-slide > img {
    width: 210px;
    height: 300px;
  }
  .slider-control-bottomcenter {
    bottom: -50px !important;
  }
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
`;
