import styled from 'styled-components';

export default function CardImg(props) {
  return (
    <ImageWrap>
      <Image src={props.src} alt={props.alt}></Image>
      <ImageCover />
      <OnTextWrap>
        <Date>20.03.25</Date>
        <Title>코로나는 언제 끝날것인가</Title>
        <Content>추웠던 겨울이 지나고 봄이 오나보다.올해는 코로나라는 전염병이</Content>
      </OnTextWrap>
    </ImageWrap>
  );
}
const ImageWrap = styled.div`
  display: inline-block;
  position: relative;
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
