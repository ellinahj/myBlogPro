import React from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';
import slide1 from '../../../static/images/slide1.jpg';
import slide2 from '../../../static/images/slide2.jpg';
import slide3 from '../../../static/images/slide3.jpg';
import slide4 from '../../../static/images/slide4.jpg';
import slide5 from '../../../static/images/slide5.jpg';

export default function MyRecent() {
  return (
    <MainArea>
      <Title>My recent story</Title>
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
  );
}
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
