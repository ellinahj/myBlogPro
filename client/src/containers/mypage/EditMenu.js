import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { setCate } from '../../actions/base';
import { getCate } from '../../api/blog';
import Container from '../../components/common/Container';
import ImgBtn from '../../components/common/ImgBtn';
import { BasicTitle, BlueEditBtn, BasicButton, theme } from '../../utils/theme';
import { createGunzip } from 'zlib';

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
          <TitleRow edit={edit}>
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
                <MenuRow>
                  <NumberFont>{index + 1}.</NumberFont>
                  <Input
                    defaultValue={item.title}
                    name={category.length - 1}
                    key={index}
                    onChange={e => handleInput(e)}
                  />

                  <CloseBtn
                    src={'/images/close.svg'}
                    width={17}
                    height={17}
                    bg="#ddd"
                    radius="50%"
                    padding={2}
                    onClick={() => handleDelete(index)}
                  />
                </MenuRow>
              ) : (
                <MenuRow>
                  <NumberFont>{index + 1}.</NumberFont>
                  <MenuFont key={index}>{item.title}</MenuFont>
                </MenuRow>
              );
            })}
          {/* {edit && (
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
                          bg="#aaa"
                          radius="50%"
                          padding={2}
                          onClick={() => handleDelete(index)}
                        />
                      </CenterLeftRow>
                    );
                  })}
            </Column>
          )} */}
          <Row>{edit && <SubmitBtn>변경</SubmitBtn>}</Row>
        </StyledColumn>
      </CenterRow>
    </Con>
  );
}
const Con = styled(Container)`
  display: flex;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
`;
const MenuRow = styled.span`
  width: ${props => (props.width ? `${props.width}px` : '')};
  height: ${props => (props.height ? `${props.height}px` : '')};
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;
const CenterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
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
  background: #fafafa;
  box-sizing: border-box;
  padding: 30px;
`;
const TitleRow = styled(MenuRow)`
  margin-bottom: 20px;
  ${props =>
    props.edit &&
    css`
      margin-bottom: 40px;
    `}
`;
const Title = styled.span`
  ${BasicTitle};
  margin-right: 5px;
  font-size: ${props => props.theme.mlFont};
`;
const TitleInfo = styled.span`
  color: #888;
`;
const MenuFont = styled.span`
  color: ${props => props.userColor};
`;
const NumberFont = styled.span`
  margin-right: 20px;
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
  height: 20px;
`;

const CloseBtn = styled(ImgBtn)`
  margin-left: 5px;
`;
const max_category_count = 3;

const SubmitBtn = styled.button`
  ${BasicButton};
  margin: 30px auto 0;
  padding: 5px 10px;
  font-size: ${theme.mFont};
`;
