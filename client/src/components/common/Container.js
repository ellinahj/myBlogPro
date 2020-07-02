import styled from 'styled-components';
export default function Container(props) {
  return <ContainerWrap>{props.children}</ContainerWrap>;
}
const ContainerWrap = styled.section`
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
`;
