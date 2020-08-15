import styled from 'styled-components';
import { it } from 'date-fns/locale';
import { useSelector, useDispatch } from 'react-redux';
import { theme } from '../../utils/theme';
import moment from 'moment';
import Carousel from 'nuka-carousel';

export default function List(props) {
  const { luminantColor, blogData, deleteItem } = props;
  const userColor = useSelector(state => state.common.userColor);
  const clickMenu = useSelector(state => state.common.clickMenu);

  return (
    <ListArea>
      <Content>
        {blogData &&
          blogData.length > 0 &&
          blogData.map((item, index) => {
            const date = item.now_date ? item.now_date : '';
            var stillUtc = moment.utc(date).format();
            const convertedDate = moment(stillUtc).format('YYYY월 M월 D일');
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
                  <Date>{item.now_date ? `작성일 ${convertedDate}` : ''}</Date>
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
const Date = styled.div`
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
  margin: 180px 0 10px;
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
