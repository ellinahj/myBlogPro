import styled from 'styled-components';
import Router from 'next/router';
import Carousel from 'nuka-carousel';
import slide1 from '../../../static/images/slide1.jpg';
import slide2 from '../../../static/images/slide2.jpg';
import slide3 from '../../../static/images/slide3.jpg';
import slide4 from '../../../static/images/slide4.jpg';
import slide5 from '../../../static/images/slide5.jpg';

export default function ImageSlider() {
  return (
    <Container>
      <Carousel slidesToShow={3} cellSpacing={15} cellAlign="left" slideWidth={0.95}>
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
const Container = styled.div``;
