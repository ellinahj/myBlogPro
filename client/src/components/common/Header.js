import React, { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { colorLuminance } from '../../utils/common';
import store from '../../store';
import { loginCheck } from '../../api/auth';
import { setUserInfo, setThemeColor, setLogin } from '../../actions/base';
import { Router } from 'next/router';

export default function Header() {
  const dispatch = useDispatch();
  const userColor = useSelector(state => state.common.enteredColor);
  const userInfo = useSelector(state => state.common.userInfo);
  const isLoggedIn = useSelector(state => state.common.isLoggedIn);
  const luminantColor = userColor && colorLuminance(userColor, 0.7);
  useEffect(() => {
    const storedToken = localStorage.getItem('mydiary_token') && localStorage.getItem('mydiary_token');
    const config = {
      access_token: storedToken
    };
    // console.log(isLoggedIn, 'isLoggedIn');

    loginCheck(config).then(res => {
      if (res.status < 300) {
        // console.log(res.data, 'header res.data');
        store.dispatch(setThemeColor(res.data.user_color));
        store.dispatch(setUserInfo(res.data));
      }
    });
  }, [isLoggedIn]);
  return (
    <HeadWrap userColor={userColor} luminantColor={luminantColor}>
      <Link href="/blog">
        <Logo>MyBlog_</Logo>
      </Link>
      <ProfileContainer>
        {userInfo && userInfo.profile_url ? (
          <Link href="/mypage">
            <Img src={userInfo.profile_url} />
          </Link>
        ) : (
          <StyledTitle>나의 색깔에 맞는, 나의 로그.</StyledTitle>
        )}
      </ProfileContainer>
    </HeadWrap>
  );
}

const HeadWrap = styled.header`
  width: 100%;
  max-width: 765px;
  height: 60px;
  position: fixed;
  top: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-image: linear-gradient(
    90deg,
    ${props => props.userColor || '#ff254f'},
    ${props => props.luminantColor || '#ff3f86'}
  );
  z-index: 101;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-left: 20px;
  color: #fff;
  cursor: pointer;
`;
const ProfileContainer = styled.div`
  margin-right: 20px;
`;
const StyledLink = styled.a`
  cursor: pointer;
`;
const StyledTitle = styled.span`
  color: #fff;
  font-size: 17px;
`;
const Img = styled.img`
  cursor: pointer;
  width: ${props => props.width || '30px'};
  height: ${props => props.width || '30px'};
  border-radius: ${props => props.width / 2 || 15}px;
  margin-right: 15px;
`;
