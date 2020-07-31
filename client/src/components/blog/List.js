import styled from 'styled-components';
import { it } from 'date-fns/locale';
import { useSelector } from 'react-redux';

export default function List(props) {
  const { luminantColor, blogData, sendToListValue } = props;
  const userColor = useSelector(state => state.common.userColor);
  console.log(sendToListValue, 'sen');
  return (
    <ListArea>
      <Content>
        {blogData &&
          blogData.length > 0 &&
          blogData
            .filter(some => some === '')
            .map((item, index) => {
              return (
                <CardContainer key={index} luminantColor={luminantColor} userColor={userColor}>
                  {item.first_image && (
                    <ImageArea>
                      <Img src={item.first_image} />
                    </ImageArea>
                  )}
                  <ContentArea>
                    <Date>2020년 06월 27일 토요일</Date>
                    <Title>{item.title}</Title>
                    <Comment>{item.comment}</Comment>
                    <Location>
                      {item.location_name && <Location_icon src={'/images/location.png'} />}
                      {item.location_name}
                    </Location>
                  </ContentArea>
                </CardContainer>
              );
            })}
      </Content>
    </ListArea>
  );
}
const ListArea = styled.div`
  width: 100%;
  height: 100%;
`;
const Content = styled.section`
  padding: 0 40px 40px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 30px;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  border-bottom: 2px dotted ${props => (props.userColor ? props.userColor : '#ddd')};
  background: #f5f5f5;
  border-radius: 5px;
`;
const ImageArea = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 10px; //
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const ContentArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Date = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 13px;
  color: #aaa;
`;
const Title = styled.div`
  font-size: 21px; //theme big
  font-weight: bold;
  margin-top: 10px; //
`;
const Comment = styled.div`
  font-size: 15px;
  margin-top: 10px; //
  line-height: 1.4;
`;
const Location = styled.div`
  cursor: pointer;
  color: #6da3f7;
  font-size: 13px;
  margin-top: 15px; //
  display: flex;
  align-items: center;
`;
const Location_icon = styled.img`
  width: 14px;
  height: 14px;
`;

// 이전 이미지 로딩
// const CardWrap = styled.div`
//   float: left;
//   width: calc(50% - 10px);
//   min-height: auto;
//   margin-bottom: 20px;
//   @media (min-width: 320px) and (max-width: 480px) {
//     width: 100%;
//   }
//   /* box-sizing: border-box; */
//   :nth-child(2n) {
//     margin-left: 20px;
//   }
// `;
// const CardContainer = styled.div`
//   li {
//     display: inline-block;
//     width: 100%;
//     height: 200px;
//     background-size: cover;
//   }

//   #block {
//     width: 100%;
//     height: 700px;
//   }

//   #list {
//     width: 100%;
//     display: grid;
//     grid-gap: 10px;
//     grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//     /* height: 600px;
//   overflow: scroll; */
//   }
// `;

//이미지 슬라이더 위에 텍스트
// const LoadingState = styled.img`
//   position: absolute;
//   z-index: 101;
//   width: 64px;
//   height: 64px;
//   top: 50%;
//   left: 50%;
// `;
// const ImageWrap = styled.div`
//   /* display: inline-block;
//   position: relative; */
//   width: 100px;
//   height: 200px;
// `;
// const Image = styled.img`
//   width: 100%;
//   height: 100%;
// `;
// const ImageCover = styled.div`
//   width: 100%;
//   height: 100%;
//   opacity: 0.3;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background-image: linear-gradient(#fff, #000);
// `;
// const OnTextWrap = styled.div`
//   color: #000;
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   padding: 13px;
//   display: flex;
//   flex-direction: column;
// `;
// const Date = styled.div``;
// const Title = styled.div`
//   font-size: ${props => props.theme.lFont};
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: 1;
//   -webkit-box-orient: vertical;
//   word-wrap: break-word;
//   height: 2em;
//   line-height: 2em;
// `;
// const CardContent = styled.div`
//   font-size: ${props => props.theme.mFont};
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   word-wrap: break-word;
//   line-height: 1.6em;
//   height: 3.2em;
// `;
