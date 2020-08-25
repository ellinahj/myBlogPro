import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin, setThemeColor, setUserInfo, setFont, setCategory, setClickMenu } from '../../actions/base';

export default function TopInfo(props) {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.common.userInfo);

  const logout = () => {
    Router.push('/login');
    localStorage.removeItem('mydiary_token');
    dispatch(setUserInfo(undefined));
    dispatch(setThemeColor('#e36f63'));
    dispatch(setFont(`'Gothic A1', sans-serif`));
    dispatch(setCategory(undefined));
    dispatch(setClickMenu({}));
    alert('로그아웃되었습니다.');
  };
  return (
    <MyInfoWrap>
      <Profile>
        <div>
          <Img
            src={userInfo && userInfo.profile_url ? userInfo.profile_url : '/images/default_profile.png'}
            width={70}
          />
          <Column>
            <NickName>{userInfo && userInfo.nickname}</NickName>
          </Column>
        </div>
        <LogoutContainer>
          <Logout onClick={logout}>로그아웃</Logout>
        </LogoutContainer>
      </Profile>
    </MyInfoWrap>
  );
}

const MyInfoWrap = styled.section`
  width: 100%;
  padding: 45px 40px 45px;
  box-sizing: border-box;
  background-color: #fafafa;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
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
  justify-content: space-between;
`;
const Img = styled.img`
  width: ${props => props.width || '30px'};
  height: ${props => props.width || '30px'};
  border-radius: ${props => props.width / 2 || 15}px;
  margin-right: 15px;
  border: 1px solid #ddd;
`;
const NickName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;
const LogoutContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Logout = styled.div`
  color: #aaa;
  cursor: pointer;
`;
