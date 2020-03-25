import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import Carousel from 'nuka-carousel';
import slide1 from '../../../static/images/slide1.jpg';
import slide2 from '../../../static/images/slide2.jpg';
import slide3 from '../../../static/images/slide3.jpg';
import slide4 from '../../../static/images/slide4.jpg';
import slide5 from '../../../static/images/slide5.jpg';
import { useInnerWidth } from '../../js/common';

export default function ImageSlider() {
  const innerWidth = useInnerWidth();
  const baseWidth = innerWidth > MAX_SLIDE_WIDTH ? MAX_SLIDE_WIDTH : innerWidth;
  const showSlideNum = 3.2 * (baseWidth / MAX_SLIDE_WIDTH);

  return (
    <Container>
      <Carousel slidesToShow={showSlideNum <= 1.2 ? 1.2 : showSlideNum} cellAlign="left" cellSpacing={20}>
        <img src={slide1} alt="메인 슬라이드이미지1" onClick={() => Router.push('/detail')} />
        <img src={slide2} alt="메인 슬라이드이미지2" onClick={() => Router.push('/detail')} />
        <img src={slide3} alt="메인 슬라이드이미지3" onClick={() => Router.push('/detail')} />
        <img src={slide4} alt="메인 슬라이드이미지4" onClick={() => Router.push('/detail')} />
        <img src={slide5} alt="메인 슬라이드이미지5" onClick={() => Router.push('/detail')} />
        <img src={slide1} alt="메인 슬라이드이미지1" onClick={() => Router.push('/detail')} />
        <img src={slide2} alt="메인 슬라이드이미지2" onClick={() => Router.push('/detail')} />
        <img src={slide3} alt="메인 슬라이드이미지3" onClick={() => Router.push('/detail')} />
        <img src={slide4} alt="메인 슬라이드이미지4" onClick={() => Router.push('/detail')} />
        <img src={slide5} alt="메인 슬라이드이미지5" onClick={() => Router.push('/detail')} />
      </Carousel>
    </Container>
  );
}
const MAX_SLIDE_WIDTH = 765;
const Container = styled.div`
  .slider-slide img {
  }
  .slider-control-bottomcenter {
    display: none;
  }
`;
