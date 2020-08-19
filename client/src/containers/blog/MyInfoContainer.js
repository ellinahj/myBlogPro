import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { colorLuminance } from '../../utils/common';
export default function MyInfo() {
  const userColor = useSelector(state => state.common.userColor);
  const luminantColor = userColor && colorLuminance(userColor, 0.5);
  const userInfo = useSelector(state => state.common.userInfo);
  return (
    <MyInfoWrap userColor={userColor} luminantColor={luminantColor}>
      <Profile>
        <Img src={userInfo && userInfo.profile_url ? userInfo.profile_url : '/images/default_profile.png'} />
        <NickName>{userInfo && userInfo.nickname}</NickName>
      </Profile>
      <Comment>{userInfo && userInfo.main_title}</Comment>
    </MyInfoWrap>
  );
}

const MyInfoWrap = styled.section`
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
  background-image: linear-gradient(90deg, ${props => props.userColor}, ${props => props.luminantColor});
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Img = styled.img`
  width: ${props => props.width || '50px'};
  height: ${props => props.width || '50px'};
  border-radius: ${props => props.width / 2 || 25}px;
  margin-right: 15px;
`;
const NickName = styled.div`
  font-size: 15px;
`;
const Comment = styled.div`
  font-size: 23px;
  font-weight: bold;
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
