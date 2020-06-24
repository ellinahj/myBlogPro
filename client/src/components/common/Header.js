import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { colorLuminance } from '../../utils/common';
import Link from 'next/link';

export default function Header() {
  const dispatch = useDispatch();
  const userColor = useSelector(state => state.common.enteredColor);
  const getUserInfo = useSelector(state => state.common.userInfo);
  const nickname = getUserInfo ? getUserInfo.nickname : '';
  const luminantColor = colorLuminance(userColor, 0.7);
  useEffect(() => {
    localStorage.setItem('nickname', nickname);
  }, []);

  return (
    <HeadWrap userColor={userColor} luminantColor={luminantColor}>
      <Link href="/">
        <Logo>MyBlog_</Logo>
      </Link>
      <NicknameContainer>
        {nickname ? (
          <Link href="/mypage">
            <StyledLink>{`${nickname}님`}</StyledLink>
          </Link>
        ) : (
          <StyledTitle>나의 색깔에 맞는, 나의 로그.</StyledTitle>
        )}
      </NicknameContainer>
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
  color: #fff;
  cursor: pointer;
`;
const NicknameContainer = styled.div`
  margin-right: 20px;
`;
const StyledLink = styled.a`
  cursor: pointer;
`;
const StyledTitle = styled.span`
  color: #fff;
  font-size: 17px;
`;
