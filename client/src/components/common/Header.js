import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { colorLuminance } from '../../../src/js/common';
import Link from 'next/link';

export default function Header() {
  const userColor = useSelector(state => state.common.enteredColor);
  const luminantColor = colorLuminance(userColor, 0.7);
  const [nickName, setNickname] = useState('');
  useEffect(() => {
    const getToken = localStorage.getItem('mydiary_token');
    if (getToken) {
      const config = {
        headers: {
          access_token: getToken
        }
      };
      axios
        .get('http://127.0.0.1:3001/api/user/info', config)
        .then(res => {
          if (res.status === 200 && res.data) {
            console.log(res, 'res');

            setNickname(res.data.nickname);
          }
        })
        .catch(err => console.log(err, 'login err'));
    }
  }, [nickName]);
  return (
    <HeadWrap userColor={userColor} luminantColor={luminantColor}>
      <Logo>Logo</Logo>
      <LoginContainer>
        {nickName ? (
          <Link href="/mypage">
            <StyledLink>{`${nickName}님`}</StyledLink>
          </Link>
        ) : (
          <Link href="/login">
            <StyledLink>로그인</StyledLink>
          </Link>
        )}
      </LoginContainer>
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
  background-image: linear-gradient(90deg, ${props => props.userColor}, ${props => props.luminantColor});
  z-index: 101;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-left: 20px;
`;
const LoginContainer = styled.div`
  margin-right: 20px;
`;
const StyledLink = styled.a`
  cursor: pointer;
`;
