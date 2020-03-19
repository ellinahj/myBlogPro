import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import defaultImg from '../../../static/images/default_profile.png';

function MyInfo() {
  const userColor = useSelector(state => state.common.enteredColor);

  return (
    <MyInfoWrap userColor={userColor}>
      <Profile>
        <Img src={defaultImg} />
        <NickName>리나</NickName>
      </Profile>
      <Comment>오늘보다 나은 내일</Comment>
    </MyInfoWrap>
  );
}
export default MyInfo;
const MyInfoWrap = styled.section`
  width: 100%;
  height: 200px;
  padding: 60px 30px 0;
  box-sizing: border-box;
  background-image: linear-gradient(90deg, ${props => props.userColor}, #e68ca7);
  background-repeat: no-repeat;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Img = styled.img`
  width: ${props => props.width || '30px'};
  height: ${props => props.width || '30px'};
  cursor: pointer;
  border-radius: ${props => props.width / 2 || 15}px;
  margin-right: 15px;
`;
const NickName = styled.div`
  font-size: 15px;
`;
const Comment = styled.div`
  font-size: 23px;
  font-weight: bold;
  margin-top: 15px;
`;
