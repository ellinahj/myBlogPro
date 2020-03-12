import React from 'react';
import styled from 'styled-components';

export default function MainBg(props) {
  return (
    <MainbgWrap>
      {!props.isLogin ? (
        <BasicBg>
          <div className="basicTitle">
            나의 일상을 기록하고
            <br />
            추억
          </div>
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
  height: 500px;
  background-color: #ff838b;
  .basicTitle {
    box-sizing: border-box;
    padding: 20vh 0 0 10vh;
    color: #fff;
    font-size: 20px;
    line-height: 40px;
  }
`;
const UserBg = styled.div``;
