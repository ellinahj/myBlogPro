import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import defaultImg from '../../../static/images/default_profile.png';
import edit from '../../../static/images/edit.svg';
import store from '../../store';
import { setLogin, setThemeColor, setUserInfo } from '../../actions/base';

export default function MyInfo(props) {
  const { clickEdit } = props;
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.common.userInfo);
  const logout = () => {
    localStorage.removeItem('mydiary_token');
    store.dispatch(setLogin(false));
    store.dispatch(setUserInfo(undefined));
    store.dispatch(setThemeColor(''));
    Router.push('/login');
  };
  return (
    <MyInfoWrap>
      <div>
        <Profile>
          <Img src={userInfo && userInfo.profile_url ? userInfo.profile_url : defaultImg} width={70} />
          <Column>
            <NickName>{userInfo && userInfo.nickname}</NickName>
            <ProfileEdit onClick={e => clickEdit(e)}>프로필편집</ProfileEdit>
          </Column>
        </Profile>
        <Comment>{userInfo && userInfo.main_title}</Comment>
      </div>
      <LogoutContainer>
        <Logout onClick={logout}>로그아웃</Logout>
      </LogoutContainer>
    </MyInfoWrap>
  );
}

const MyInfoWrap = styled.section`
  width: 100%;
  padding: 50px 30px 40px;
  box-sizing: border-box;
  background-color: #fafafa;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #dedede;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
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
const ProfileEdit = styled.div`
  color: #6da3f7;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
`;

const NickName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const Comment = styled.div`
  font-size: 23px;
  font-weight: bold;
  margin-top: 15px;
`;

const LogoutContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Logout = styled.div`
  color: #aaa;
  cursor: pointer;
`;
