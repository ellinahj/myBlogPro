import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { setCate } from '../../actions/base';
import { getCate } from '../../api/blog';
import { deleteCate, updateCate } from '../../api/category';
import Container from '../../components/common/Container';
import ImgBtn from '../../components/common/ImgBtn';
import { BasicTitle, BlueEditBtn, BasicButton, theme } from '../../utils/theme';

export default function ChangeMenu() {
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
          dispatch(setCate(res.data.data));
          console.log(res.data.data, 'res getCate');
          const result = {};
          res.data.data
            ? res.data.data.forEach((item, idx) => {
                result[idx] = { title: item.title, id: item.id };
              })
            : [];
          setCateValue(result);
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
      [name]: { ...cateValue[name], title: value }
    });
  };
  const increaseCateValue = () => {
    if (countCate + cateInputCount < max_category_count) setCateInputCount(cateInputCount + 1);
  };

  const handleDelete = idx => {
    const tempCateValue = { ...cateValue };
    console.log(tempCateValue, 'temp');
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
      console.log(tempCateValue[idx], 'ii');
      console.log('tt');
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
            console.log(res.data, 'delete res.data');
            dispatch(setCate(res.data.data));
            console.log(res.data.data, 'res getCate');
            const result = {};
            res.data.data
              ? res.data.data.forEach((item, idx) => {
                  result[idx] = { title: item.title, id: item.id };
                })
              : [];
            setCateValue(result);
          }
        });
      }
    } else {
      console.log('vv');
    }
    Object.keys(cateValue).forEach(key => {
      if (Number(key) === idx) {
        tempCateValue[key] = undefined;
        // const tempCategory = { ...category };
        // console.log(tempCategory[key], 'tempCategory');
        // delete tempCategory[key];
        console.log('in1');
      } else if (Number(key) > idx) {
        //0 1 2   i
        tempCateValue[Number(key) - 1] = cateValue[key];
        tempCateValue[key] = undefined;

        console.log('in2');
      }
      setCateValue(tempCateValue);
      setCateInputCount(cateInputCount - 1);
      console.log('in3');
    });
  };
  const deleteMenu = () => {
    if (window.confirm('메뉴에 저장된 글도 함께 삭제됩니다. 정말 삭제하시겠습니까?')) {
      return true;
    } else {
      return false;
    }
  };
  const handleMenuUpdate = () => {
    // const hasIdObj = Object.values(cateValue).filter(value => !!value?.id);
    const hasIdArr = Object.values(cateValue).filter(obj => {
      return obj.title === '';
    });
    if (hasIdArr.length > 0) {
      alert('메뉴이름을 입력해주세요.');
    } else {
      console.log(cateValue, 'arr');
      const data = cateValue;
      const getToken = localStorage.getItem('mydiary_token');
      if (getToken) {
        const config = {
          access_token: getToken
        };
        updateCate(config, data).then(res => {
          if (res.status === 200 && res.data) {
            dispatch(setCate(res.data.data));
            console.log(res.data.data, ' all res');
            const result = {};
            res.data.data
              ? res.data.data.forEach((item, idx) => {
                  result[idx] = { title: item.title, id: item.id };
                })
              : [];
            setCateValue(result);
            setEdit(false);
          }
        });
      }
    }
  };
  const showDeleteBtn = Object.values(cateValue).filter(value => !!value?.id).length > 1;

  return (
    <Con>
      <CenterRow>
        <StyledColumn>
          <TitleRow edit={edit}>
            <Title>
              메뉴<TitleInfo>(최대 3개, 15글자 이하 권장) </TitleInfo>
            </Title>
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
                  {/* {showDeleteBtn && (
                    <CloseBtn
                      src={'/images/close.svg'}
                      width={17}
                      height={17}
                      bg="#ddd"
                      radius="50%"
                      padding={2}
                      onClick={() => handleDelete(index)}
                    />
                  )} */}
                </MenuRow>
              ) : (
                <>
                  <MenuRow>
                    <NumberFont>{index + 1}.</NumberFont>
                    <MenuFont key={index}>{item.title}</MenuFont>
                    {showDeleteBtn && (
                      <CloseBtn
                        src={'/images/close.svg'}
                        width={17}
                        height={17}
                        bg="#ddd"
                        radius="50%"
                        padding={2}
                        onClick={() => handleDelete(index)}
                      />
                    )}
                  </MenuRow>
                </>
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
                        <Input
                          name={index}
                          key={index}
                          value={cateValue[index] ? cateValue[index].title : ''}
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
  margin-right: 20px;
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
  width: 75px;
  height: 33px;
  cursor: pointer;
  font-weight: bold;
  margin: 20px 20px 0 33px;
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
