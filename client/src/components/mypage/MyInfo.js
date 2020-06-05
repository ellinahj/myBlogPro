import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { ChromePicker } from 'react-color';
import { setThemeColor } from '../../actions/base';
import defaultImg from '../../../static/images/default_profile.png';
import edit from '../../../static/images/edit.svg';

function MyInfo() {
  const dispatch = useDispatch();
  const [openPicker, setOpenPicker] = useState(false);

  const handlePickComplete = color => {
    dispatch(setThemeColor(color.hex));
    localStorage.setItem('myThemeColor', color.hex);
    setOpenPicker(!openPicker);
  };
  const userColor = useSelector(state => state.common.enteredColor);
  // useEffect(()=>{

  // const config = {
  //   header:{
  //     access_token :''
  //   }

  //  }
  //     axios
  //       .get('http://127.0.0.1:3001/api/user/info', data,config)
  //       .then(res => console.log(res, 'res'))
  //       .catch(err => console.log(err, 'err'));

  // },[])
  return (
    <MyInfoWrap>
      <div>
        <Profile>
          <Img src={defaultImg} width={70} />
          <EditWrap>
            <Link href="/mypage/edit">
              <EditImg src={edit} width={16} />
            </Link>
          </EditWrap>
          <NickName>리나</NickName>
        </Profile>

        <Comment>오늘보다 나은 내일</Comment>
      </div>
      <div>
        <ThemeButton type="button" onClick={() => setOpenPicker(!openPicker)} userColor={userColor}>
          테마변경
        </ThemeButton>
        {openPicker && <ChromePicker color={userColor} onChangeComplete={handlePickComplete} />}
      </div>
    </MyInfoWrap>
  );
}
export default MyInfo;
const MyInfoWrap = styled.section`
  width: 100%;
  height: 170px;
  padding: 30px 30px 0;
  box-sizing: border-box;
  background-color: #fafafa;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #dedede;
`;
const Profile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Img = styled.img`
  width: ${props => props.width || '30px'};
  height: ${props => props.width || '30px'};
  border-radius: ${props => props.width / 2 || 15}px;
  margin-right: 15px;
`;
const EditWrap = styled.div`
  cursor: pointer;
  background-color: #666;
  position: absolute;
  bottom: 0;
  left: 46px;
  margin-right: 0;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const EditImg = styled(Img)`
  margin-right: 0;
`;
const NickName = styled.div`
  font-size: 15px;
  font-weight: bold;
`;
const Comment = styled.div`
  font-size: 23px;
  font-weight: bold;
  margin-top: 15px;
`;
const ThemeButton = styled.div`
  width: 90px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  border: 1px solid ${props => props.userColor};
  color: ${props => props.userColor};
  :hover {
    opacity: 0.7;
  }
`;
