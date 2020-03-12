import React from 'react';
import styled from 'styled-components';

export default function MyInfo() {
  return <MyInfoWrap>MyInfo</MyInfoWrap>;
}

const MyInfoWrap = styled.div`
  width: 100%;
  height: 210px;
  position: relative;
  padding: 60px 30px 0;
  box-sizing: border-box;
  /* background-color: #fd6067; */
  background-image: linear-gradient(90deg, #fd6067, #e68ca7);
  background-repeat: no-repeat;
`;
