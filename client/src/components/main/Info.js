import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import defaultImg from '../../../static/images/default_profile.png';
import { colorLuminance } from '../../utils/common';
function MyInfo(props) {
  const userColor = useSelector(state => state.common.enteredColor);
  const luminantColor = colorLuminance(userColor, 0.7);
  const userInfo = useSelector(state => state.common.userInfo);
  return (
    <MyInfoWrap userColor={userColor} luminantColor={luminantColor}>
      <Profile>
        <Img src={defaultImg} />
        <NickName>{userInfo && userInfo.nickname}</NickName>
      </Profile>
      <Comment>{userInfo && userInfo.main_title}</Comment>
      {props.children}
    </MyInfoWrap>
  );
}
export default MyInfo;
const MyInfoWrap = styled.section`
  width: 100%;
  height: 200px;
  padding: 60px 30px 0;
  box-sizing: border-box;
  background-image: linear-gradient(90deg, ${props => props.userColor}, ${props => props.luminantColor});
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
