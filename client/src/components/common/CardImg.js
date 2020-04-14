import styled from 'styled-components';

//임시 image
import testImage from '../../../static/images/slide2.jpg';
export default function CardImg(props) {
  const array = new Array(
    '../../../static/images/slide1.jpg',
    '../../../static/images/slide2.jpg',
    '../../../static/images/slide3.jpg',
    '../../../static/images/slide4.jpg',
    '../../../static/images/slide5.jpg'
  );
  function randomItem(a) {
    return a[Math.floor(Math.random() * a.length)];
  }

  return (
    <ImageWrap>
      <Image src={randomItem(array)} />
      <ImageCover />
      <OnTextWrap>
        <Date>20.03.25</Date>
        {/* <Title>{props.item.title}}</Title>
        <Content>{props.item.body}</Content> */}
      </OnTextWrap>
    </ImageWrap>
  );
}
const ImageWrap = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: auto;
`;
const Image = styled.img`
  width: 100%;
  /*이미지 가운데로 오기*/
  /*parent에서 높이 받아서 고정*/
  height: 300px;
`;
const ImageCover = styled.div`
  width: 100%;
  height: auto;
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(#fff, #000);
`;
const OnTextWrap = styled.div`
  color: #fff;
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
const Content = styled.div`
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
