import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { theme } from '../../utils/theme';
import Carousel from 'nuka-carousel';
import moment from 'moment';

export default function List(props) {
  const { luminantColor, blogData, deleteItem } = props;
  const userColor = useSelector(state => state.common.userColor);

  return (
    <ListArea>
      <Content>
        {blogData &&
          blogData.length > 0 &&
          blogData.map((item, index) => {
            const parseDate = new Date(item.now_date);
            const pasedDate = moment(parseDate).format('YYYY년 MM월 DD일 HH:mm');
            return (
              <CardContainer key={index} luminantColor={luminantColor} userColor={userColor}>
                <IconCloseCon onClick={() => deleteItem(item.id, item.image_url)}>
                  <IconCloseImg src={'/images/close.svg'} />
                </IconCloseCon>
                {item && item.image_url.length > 0 ? (
                  <ImageArea>
                    <Carousel
                      defaultControlsConfig={{
                        nextButtonText: '>',
                        prevButtonText: '<',
                        pagingDotsStyle: {
                          fill: '#ddd'
                        }
                      }}
                      heightMode="current"
                    >
                      {item.image_url.map((item, index) => {
                        return <Img key={index} src={item} />;
                      })}
                    </Carousel>
                  </ImageArea>
                ) : (
                  <></>
                )}
                <ContentArea>
                  <WriteDate>{pasedDate}</WriteDate>
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
        {blogData && blogData.length === 0 && (
          <Col>
            <WriteWrap>
              <Write>첫번째 글을 작성해보세요.</Write>
              <WriteImg src={'/images/keyboard.png'} />
            </WriteWrap>
          </Col>
        )}
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
  margin: 30px 0 0;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  border-top: 2px dotted ${props => (props.userColor ? props.userColor : '#ddd')};
  background: #f6f6f6;
  border-radius: 5px;
  position: relative;
  @media (max-width: 780px) {
    padding: 20px;
  }
`;
const ImageArea = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
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
const WriteDate = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 13px;
  color: #aaa;
`;
const Title = styled.div`
  font-size: 21px; //theme big
  font-weight: bold;
  margin-top: 10px;
`;
const Comment = styled.div`
  font-size: 15px;
  margin-top: 10px;
  line-height: 1.4;
`;
const Location = styled.div`
  color: #6da3f7;
  font-size: 13px;
  margin-top: 15px;
  display: flex;
  align-items: center;
`;
const Location_icon = styled.img`
  width: 14px;
  height: 14px;
`;
const WriteWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Write = styled.div`
  font-size: ${theme.mFont};
  color: #ccc;
  margin: 130px 0 10px;
`;
const WriteImg = styled.img`
  max-width: 80px;
  max-height: 80px;
`;
const IconCloseCon = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  width: 20px;
  height: 20px;
  background-color: #ddd;
  border-radius: 12px;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;
const IconCloseImg = styled.img`
  position: absolute;
  top: 3px;
  left: 3px;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
