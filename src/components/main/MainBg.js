import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';

export default function MainBg(props) {
  const userTheme = useSelector(state => state.common.enteredColor);

  return (
    <MainbgWrap>
      {!props.isLogin ? (
        <BasicBg userTheme={userTheme}>
          <BasicTitle>
            나의 일상을 기록하고
            <br />
            추억하는 나만의 공간
            <br />
            나의 일정을 친구들과 공유해보세요.
          </BasicTitle>
        </BasicBg>
      ) : (
        <UserBg />
      )}
    </MainbgWrap>
  );
}
const MainbgWrap = styled.section``;
const BasicBg = styled.div`
  width: 100%;
  height: 400px;
  padding: 60px 30px 0;
  box-sizing: border-box;
  /* background-color: #fd6067; */
  ${props =>
    props.userTheme &&
    css`
      background-image: linear-gradient(90deg, ${props.userTheme}, #e68ca7);
    `} /* background-repeat: no-repeat; */
`;
const BasicTitle = styled.div`
  box-sizing: border-box;
  padding: 5vh 0 0 5vh;
  color: #fff;
  font-size: 24px;
  line-height: 45px;
`;

const UserBg = styled.div``;
