import React from 'react';
import styled from 'styled-components';
import ImageSlider from '../common/ImageSlider';

export default function MyRecent() {
  return (
    <Container>
      <Title>My recent story</Title>
      <ImageSlider />
    </Container>
  );
}
const Container = styled.section`
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
