import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return <HeadWrap>header</HeadWrap>;
}
const HeadWrap = styled.header`
  text-align: center;
  position: absolute;
  top: 0px;
  left: 0px;
`;
