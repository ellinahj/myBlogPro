import React from 'react';
import styled from 'styled-components';
import ImageSlider from '../common/ImageSlider';

export default function MyRecent() {
  return (
    <Container>
      <Title>내 최근 활동</Title>
      <ImageSlider />
    </Container>
  );
}
const Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 35px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .slider-slide {
    width: 100%;
  }
  .slide-visible {
    width: 100%;
  }
  ㅈ .slider-slide > img {
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
  margin-bottom: 25px;
`;
