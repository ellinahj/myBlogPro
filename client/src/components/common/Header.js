import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { colorLuminance } from '../../utils/common';
import { loginCheck } from '../../api/auth';
import { setUserInfo, setThemeColor, setToolTip, setFont } from '../../actions/base';
import { useRouter } from 'next/router';
import { theme } from '../../utils/theme';
import ImgBtn from '../../components/common/ImgBtn';

export default function Header() {
  const Router = useRouter();
  const dispatch = useDispatch();
  const userColor = useSelector(state => state.common.userColor);
  const userInfo = useSelector(state => state.common.userInfo);
  const isLoggedIn = useSelector(state => state.common.isLoggedIn);
  const tooltip = useSelector(state => state.common.showToolTip);
  const luminantColor = userColor && colorLuminance(userColor, 0.5);

  useEffect(() => {
    if (Router.asPath !== '/join') {
      const showTool = JSON.parse(localStorage.getItem('showTool'));
      if (showTool === false) {
        dispatch(setToolTip(false));
      }
      const storedToken = localStorage.getItem('mydiary_token') && localStorage.getItem('mydiary_token');
      const config = {
        access_token: storedToken
      };
      loginCheck(config).then(res => {
        if (res.status === 200 && res.data) {
          dispatch(setThemeColor(res.data.user_color));
          dispatch(setUserInfo(res.data));
          dispatch(setFont(res.data.user_font));
        }
      });
    }
  }, []);
  const handleToolTip = () => {
    localStorage.setItem('showTool', JSON.stringify(false));
    dispatch(setToolTip(false));
  };

  return (
    <HeadWrap userColor={userColor} luminantColor={luminantColor}>
      <Link href="/blog">
        <Logo>MyBlog_</Logo>
      </Link>
      <ProfileContainer>
        {userInfo &&
          (userInfo.profile_url ? (
            <Link href="/mypage">
              <Img src={userInfo.profile_url} />
            </Link>
          ) : (
            <StyledTitle hoverColor={userInfo} onClick={() => Router.push('/mypage')}>
              나의 색깔에 맞는, 나의 로그.
            </StyledTitle>
          ))}
        {!userInfo && <StyledTitle>나의 색깔에 맞는, 나의 로그.</StyledTitle>}
        {isLoggedIn && tooltip && (
          <ToolTipWrap profileUrl={userInfo && userInfo.profile_url}>
            <span className="triangle test_1"></span>
            <ToolTip>
              나의 정보를 <br />
              입력해보세요!
            </ToolTip>
            <CloseBtn src={'/images/minClose.svg'} width={12} height={12} onClick={handleToolTip} />
          </ToolTipWrap>
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
const ProfileContainer = styled.div`
  margin-right: 20px;
  position: relative;
`;
const StyledLink = styled.a`
  cursor: pointer;
`;
const StyledTitle = styled.span`
  color: #fff;
  font-size: 17px;
  :hover {
    color: ${props => props.hoverColor && '#f7f7f7'};
    cursor: ${props => (props.hoverColor ? 'pointer' : '')};
  }
`;

const ToolTipWrap = styled.div`
  position: absolute;
  top: ${props => (props.profileUrl ? '45px' : '30px')};
  right: ${props => (props.profileUrl ? '12px' : '0px')};
  width: 95px;
  height: 50px;
  background: #fefefe;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  border: 1px solid #eee;
  animation: motion 0.8s linear infinite alternate;
  margin-top: 0;

  @keyframes motion {
    0% {
      margin-top: 0px;
    }
    100% {
      margin-top: 7px;
    }
  }

  .triangle {
    top: -19px;
    right: 12px;
    position: absolute;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 5px;
    border-radius: 3px;
  }
  .triangle.test_1 {
    border-color: transparent transparent #fefefe transparent;
  }
`;
const ToolTip = styled.div`
  color: #000;
  font-size: ${theme.ssFont};
  line-height: 18px;
`;
const Img = styled.img`
  cursor: pointer;
  width: ${props => props.width || '30px'};
  height: ${props => props.width || '30px'};
  border-radius: ${props => props.width / 2 || 15}px;
  margin-right: 15px;
`;
const CloseBtn = styled(ImgBtn)`
  position: absolute;
  top: 6px;
  right: 6px;
  &:hover {
    background: #ddd;
  }
`;
