import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import defaultImg from '../../../static/images/default_profile.png';
import edit from '../../../static/images/edit.svg';
import store from '../../store';
import { setLogin, setThemeColor, setUserInfo } from '../../actions/base';

export default function MyInfo() {
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
          <EditWrap>
            <Link href="/mypage/edit">
              <EditImg src={edit} width={16} />
            </Link>
          </EditWrap>
          <NickName>{userInfo && userInfo.nickname}</NickName>
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
  padding: 30px;
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

const LogoutContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Logout = styled.div`
  color: #aaa;
  cursor: pointer;
`;
