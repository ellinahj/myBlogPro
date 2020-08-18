import styled from 'styled-components';
export default function Container(props) {
  return <ContainerWrap className={props.className}>{props.children}</ContainerWrap>;
}
const ContainerWrap = styled.section`
  width: 100%;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
  @media screen and (max-width: 780px) {
    padding: 15px;
  }
`;
