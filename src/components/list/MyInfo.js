import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { increment } from '../../actions/base';

function MyInfo() {
  const dispatch = useDispatch();
  return (
    <MyInfoWrap>
      MyInfo
      <button type="button" onClick={() => dispatch(increment())}>
        +
      </button>
    </MyInfoWrap>
  );
}
export default MyInfo;
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
