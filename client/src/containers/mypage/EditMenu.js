import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setCate } from '../../actions/base';
import { getCate } from '../../api/blog';
import Container from '../../components/common/Container';
import ImgBtn from '../../components/common/ImgBtn';
import { BasicTitle, BlueEditBtn } from '../../utils/theme';

export default function ChangeMenu() {
  const dispatch = useDispatch();
  const category = useSelector(state => state.common.category);
  const userColor = useSelector(state => state.common.userColor);
  const [edit, setEdit] = useState(false);
  const [cateValue, setCateValue] = useState({
    0: '',
    1: '',
    2: ''
  });
  const [cateInputCount, setCateInputCount] = useState(0);
  const countCate = category ? category.length : 0;
  useEffect(() => {
    const getToken = localStorage.getItem('mydiary_token');
    if (getToken) {
      const config = {
        access_token: getToken
      };
      getCate(config).then(res => {
        if (res.status === 200 && res.data) {
          dispatch(setCate(res.data.data));
          res.data.data &&
            res.data.data.map((item, idx) => {
              return setCateValue({ [idx]: item.title });
            });
        }
      });
    }
  }, []);
  const handleEditMenu = () => {
    setEdit(!edit);
  };
  const handleInput = e => {
    const { name, value } = e.target;
    setCateValue({
      ...cateValue,
      [name]: value
    });
  };
  const increaseCateValue = () => {
    if (countCate + cateInputCount < max_category_count) setCateInputCount(cateInputCount + 1);
  };
  const handleDelete = idx => {
    const tempCateValue = { ...cateValue };
    Object.keys(cateValue).forEach(key => {
      if (Number(key) === idx) {
        tempCateValue[key] = undefined;
      } else if (Number(key) > idx) {
        tempCateValue[Number(key) - 1] = cateValue[key];
        tempCateValue[key] = undefined;
      }
    });
    setCateValue(tempCateValue);
    setCateInputCount(cateInputCount - 1);
  };
  return (
    <Con>
      <CenterRow>
        <StyledColumn>
          <TitleRow>
            <Title>
              메뉴<TitleInfo>(최대 3개) </TitleInfo>
            </Title>
            {/* 메뉴생성버튼 */}
            {edit && countCate + cateInputCount < max_category_count && (
              <AddMenuBtn onClick={increaseCateValue} userColor={userColor}>
                +
              </AddMenuBtn>
            )}
            <EditTitle onClick={handleEditMenu}>메뉴변경</EditTitle>
          </TitleRow>
          {category &&
            category.length > 0 &&
            category.map((item, index) => {
              return edit ? (
                <Row>
                  <NumberFont>{index + 1}.</NumberFont>
                  <Input
                    defaultValue={item.title}
                    name={category.length - 1}
                    key={index}
                    onChange={e => handleInput(e)}
                  />
                </Row>
              ) : (
                <Row>
                  <NumberFont>{index + 1}.</NumberFont>
                  <MenuFont key={index}>{item.title}</MenuFont>
                </Row>
              );
            })}
          {edit && (
            <Column>
              {cateInputCount > 0 &&
                Array(cateInputCount)
                  .fill('')
                  .map((i, idx) => {
                    const index = idx + category.length;
                    return (
                      <CenterLeftRow>
                        <NumberFont>{index + 1}.</NumberFont>
                        <Input name={index} key={index} value={cateValue[index] || ''} onChange={e => handleInput(e)} />
                        <CloseBtn
                          src={'/images/close.svg'}
                          width={17}
                          height={17}
                          bg="#ccc"
                          radius="50%"
                          padding={'2px'}
                          onClick={() => handleDelete(index)}
                        />
                      </CenterLeftRow>
                    );
                  })}
            </Column>
          )}
        </StyledColumn>
      </CenterRow>
    </Con>
  );
}
const Con = styled(Container)`
  display: flex;
`;
const Row = styled.span`
  width: ${props => (props.width ? `${props.width}px` : '')};
  height: ${props => (props.height ? `${props.height}px` : '')};
  margin-bottom: 10px;
`;
const CenterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CenterLeftRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledColumn = styled(Column)`
  width: 100%;
  max-width: 630px;
  background: #fafafa;
  box-sizing: border-box;
  padding: 30px;
`;
const TitleRow = styled(Row)``;
const Title = styled.span`
  ${BasicTitle};
  margin-right: 5px;
  font-size: ${props => props.theme.mFont};
`;
const TitleInfo = styled.span`
  color: #888;
`;
const MenuFont = styled.span`
  color: ${props => props.userColor};
`;
const NumberFont = styled.span`
  margin-right: 10px;
`;
const EditTitle = styled.span`
  ${BlueEditBtn}
`;
const AddMenuBtn = styled.button`
  color: ${props => props.userColor};
  border: 1px solid ${props => props.userColor};
  border-radius: 5px;
  font-size: 18px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-right: 20px;
`;
const Input = styled.input`
  width: 100px;
  height: 25px;
`;
const CloseBtn = styled(ImgBtn)`
  margin-left: 5px;
`;
const max_category_count = 3;
