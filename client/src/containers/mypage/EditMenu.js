import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { setCategory } from '../../actions/base';
import { getCate } from '../../api/blog';
import { deleteCate, updateCate } from '../../api/category';
import Container from '../../components/common/Container';
import ImgBtn from '../../components/common/ImgBtn';
import { theme, BasicTitle, BlueEditBtn, BasicButton } from '../../utils/theme';

export default function ChangeMenu(props) {
  const dispatch = useDispatch();
  const category = useSelector(state => state.common.category);
  const userColor = useSelector(state => state.common.userColor);
  const [edit, setEdit] = useState(false);
  const [cateValue, setCateValue] = useState({
    0: {},
    1: {},
    2: {}
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
          dispatch(setCategory(res.data.data));
          const result = {};
          res.data.data
            ? res.data.data.forEach((item, idx) => {
                result[idx] = { title: item.title, id: item.id };
              })
            : [];
          setCateValue(result);
          setCateInputCount(0);
        }
      });
    }
  }, []);
  const handleEditMenu = () => {
    setEdit(!edit);
  };

  const handleInput = (index, value) => {
    setCateValue({
      ...cateValue,
      [index]: { ...cateValue[index], title: value }
    });
  };

  const increaseCateValue = () => {
    if (countCate + cateInputCount < max_category_count) setCateInputCount(cateInputCount + 1);
  };

  const deleteMenu = () => {
    if (window.confirm('메뉴에 저장된 글도 함께 삭제됩니다. 정말 삭제하시겠습니까?')) {
      return true;
    } else {
      return false;
    }
  };

  const handleDelete = idx => {
    const tempCateValue = { ...cateValue };
    if (tempCateValue[idx]?.id !== undefined) {
      const hasIdLength = Object.values(tempCateValue).filter(value => !!value?.id).length;
      if (hasIdLength <= 1) {
        alert('메뉴는 최소 1개 이여야 합니다.');
        return;
      }
      const confirmDelete = deleteMenu();
      if (!confirmDelete) {
        return;
      }
      const getToken = localStorage.getItem('mydiary_token');
      if (getToken) {
        const config = {
          access_token: getToken
        };
        const cateId = tempCateValue[idx].id;
        console.log(cateId, 'cateId');
        const data = { id: cateId };
        deleteCate(config, data).then(res => {
          if (res.status === 200 && res.data) {
            dispatch(setCategory(res.data.data));
            const result = {};
            res.data.data
              ? res.data.data.forEach((item, idx) => {
                  result[idx] = { title: item.title, id: item.id };
                })
              : [];
            setCateValue(result);
            setCateInputCount(0);
          }
        });
      }
    } else {
      console.log('??');
    }
    Object.keys(cateValue).forEach(key => {
      if (Number(key) === idx) {
        tempCateValue[key] = undefined;
        // console.log('in1');
      } else if (Number(key) > idx) {
        tempCateValue[Number(key) - 1] = cateValue[key];
        tempCateValue[key] = undefined;
        // console.log('in2');
      }
      setCateValue(tempCateValue);
      setCateInputCount(cateInputCount - 1);
      // console.log('in3');
    });
  };

  const handleMenuUpdate = () => {
    // const hasIdObj = Object.values(cateValue).filter(value => !!value?.id);
    const hasIdArr = Object.values(cateValue).filter(obj => {
      return obj.title === '';
    });
    if (hasIdArr.length > 0) {
      alert('메뉴이름을 입력해주세요.');
    } else {
      // console.log(cateValue, 'arr');
      const data = cateValue;
      // console.log(data, 'data');
      const getToken = localStorage.getItem('mydiary_token');
      if (getToken) {
        const config = {
          access_token: getToken
        };
        updateCate(config, data).then(res => {
          if (res.status === 200 && res.data) {
            dispatch(setCategory(res.data.data));
            console.log(res.data.data, ' 변경 후');
            const result = {};
            res.data.data
              ? res.data.data.forEach((item, idx) => {
                  result[idx] = { title: item.title, id: item.id };
                })
              : [];
            setCateValue(result);
            setEdit(false);
            setCateInputCount(0);
            alert('변경되었습니다.');
            console.log('변경====');
          }
        });
      }
    }
  };

  const showDeleteBtn = Object.values(cateValue).filter(value => !!value?.id).length > 1;
  console.log(cateValue, 'cateValue');
  return (
    <Con>
      <CenterRow>
        <StyledColumn>
          <TitleRow edit={edit}>
            <Title>
              메뉴<TitleInfo>(최대 3개) </TitleInfo>
            </Title>
            <EditTitle onClick={handleEditMenu}>메뉴변경</EditTitle>
          </TitleRow>

          {category &&
            category.length > 0 &&
            category.map((item, index) => {
              return edit ? (
                <MenuRow key={index}>
                  <NumberFont>{index + 1}.</NumberFont>
                  <Input
                    defaultValue={item.title}
                    name={category.length - 1}
                    onChange={e => handleInput(index, e.target.value)}
                    autoComplete="off"
                    maxLength={'15'}
                  />
                  <CountRow>
                    <CountNickname>
                      {cateValue[index] && cateValue[index].title.length <= MAX_TITLE
                        ? cateValue[index].title.length
                        : 0}
                    </CountNickname>
                    <Slush>/</Slush>
                    <Maxcount>{MAX_TITLE}</Maxcount>
                  </CountRow>
                </MenuRow>
              ) : (
                <MenuRow key={index}>
                  <NumberFont>{index + 1}.</NumberFont>
                  <MenuFont>{item.title}</MenuFont>
                  {showDeleteBtn && (
                    <CloseBtn
                      key={index + 3}
                      src={'/images/close.svg'}
                      width={15}
                      height={15}
                      bg="#ddd"
                      radius="50%"
                      padding={2}
                      onClick={() => handleDelete(index)}
                    />
                  )}
                </MenuRow>
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
                      <CenterLeftRow key={index}>
                        <NumberFont>{index + 1}.</NumberFont>
                        <Input
                          name={index}
                          value={cateValue[index] ? cateValue[index].title : ''}
                          onChange={e => handleInput(index, e.target.value)}
                          autoComplete="off"
                          maxLength={'15'}
                        />
                        <CloseBtn
                          src={'/images/close.svg'}
                          width={15}
                          height={15}
                          bg="#ddd"
                          radius="50%"
                          padding={2}
                          onClick={() => handleDelete(index)}
                        />
                        <CountRow>
                          <CountNickname>
                            {cateValue[index] && cateValue[index].title.length <= MAX_TITLE
                              ? cateValue[index].title.length
                              : 0}
                          </CountNickname>
                          <Slush>/</Slush>
                          <Maxcount>{MAX_TITLE}</Maxcount>
                        </CountRow>
                      </CenterLeftRow>
                    );
                  })}
            </Column>
          )}
          {edit && countCate + cateInputCount < max_category_count && (
            <MenuRow>
              <AddRow>
                <AddMenuBtn onClick={increaseCateValue} userColor={userColor}>
                  메뉴추가
                </AddMenuBtn>
              </AddRow>
            </MenuRow>
          )}
          <Row>{edit && <SubmitBtn onClick={handleMenuUpdate}>변경</SubmitBtn>}</Row>
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
const AddRow = styled.div`
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
  @media (max-width: 780px) {
    padding: 15px;
  }
`;
const TitleRow = styled(MenuRow)`
  margin-bottom: 30px;
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
  }
`;
const Title = styled.span`
  ${BasicTitle};
  margin-right: 20px;
  font-size: ${props => props.theme.mlFont};
`;
const TitleInfo = styled.span`
  color: #888;
`;
const MenuFont = styled.span`
  color: ${props => props.userColor};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const NumberFont = styled.span`
  width: 33px;
`;
const EditTitle = styled.span`
  ${BlueEditBtn}
  @media (max-width: 780px) {
    margin-top: 15px;
  }
`;
const AddMenuBtn = styled.button`
  color: ${props => props.userColor};
  border: 1px solid ${props => props.userColor};
  border-radius: 5px;
  width: 75px;
  height: 33px;
  cursor: pointer;
  font-weight: bold;
  margin: 20px 20px 0 33px;
`;
const Input = styled.input`
  width: 210px;
  height: 20px;
`;
const CloseBtn = styled(ImgBtn)`
  margin-left: 10px;
`;
const max_category_count = 3;

const SubmitBtn = styled.button`
  ${BasicButton};
  margin: 30px auto 0;
  padding: 5px 10px;
  font-size: ${props => props.theme.mFont};
`;

const CountRow = styled.div`
  display: flex;
`;
const CountNickname = styled.div`
  color: #aaa;
  margin-left: 10px;
  font-size: ${theme.sFont};
`;
const Slush = styled.div`
  color: #aaa;
  margin: 0 2px 0;
  font-size: ${theme.sFont};
`;
const Maxcount = styled.span`
  color: #aaa;
  font-size: ${theme.sFont};
`;

const MAX_TITLE = 15;
