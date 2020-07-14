import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import Carousel from 'nuka-carousel';
import slide1 from '../../../public/images/slide1.jpg';
import slide2 from '../../../public/images/slide2.jpg';
import slide3 from '../../../public/images/slide3.jpg';
import slide4 from '../../../public/images/slide4.jpg';
import slide5 from '../../../public/images/slide5.jpg';
import CardImg from '../../components/common/CardImg';
import { useInnerWidth } from '../../utils/common';

export default function ImageSlider() {
  const innerWidth = useInnerWidth();
  const baseWidth = innerWidth > MAX_SLIDE_WIDTH ? MAX_SLIDE_WIDTH : innerWidth;
  const showSlideNum = 3.2 * (baseWidth / MAX_SLIDE_WIDTH);

  return (
    <Container>
      <Carousel slidesToShow={showSlideNum <= 1.2 ? 1.2 : showSlideNum} cellAlign="left" cellSpacing={20}>
        <CardImg src={slide1} alt={'메인이미지1'} onClick={() => Router.push('/detail')} />
        <CardImg src={slide1} alt={'메인이미지1'} onClick={() => Router.push('/detail')} />
        <CardImg src={slide1} alt={'메인이미지1'} onClick={() => Router.push('/detail')} />
        <CardImg src={slide1} alt={'메인이미지1'} onClick={() => Router.push('/detail')} />
        <CardImg src={slide1} alt={'메인이미지1'} onClick={() => Router.push('/detail')} />
      </Carousel>
    </Container>
  );
}
const MAX_SLIDE_WIDTH = 765;
const Container = styled.div`
  height: 100% !important;
  .slider-control-bottomcenter {
    display: none !important;
  }
`;
