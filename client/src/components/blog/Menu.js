import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
export default function MenuCo(props) {
  const category = useSelector(state => state.common.category);
  const { userColor, luminantColor, isSticky, menuIndex } = props;
  return (
    <MenuWrap luminantColor={luminantColor} isSticky={isSticky}>
      {category &&
        category.length > 0 &&
        category.map((item, index) => {
          return (
            <Menu onClick={e => props.handleMenuClick(index, item.id)} key={index}>
              {item.title}
              <MenuBorder userColor={userColor} active={menuIndex === index} />
            </Menu>
          );
        })}
    </MenuWrap>
  );
}
const MenuWrap = styled.div`
  width: 100%;
  max-width: 765px;
  height: 60px;
  background-color: #fff;
  position: relative;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${props =>
    props.isSticky &&
    css`
      position: fixed;
      top: 60px;
      z-index: 100;
    `}
    &:nth-child(${props => props.index}) {
      :last-child::after{
       
      }
    }
`;
const Menu = styled.div`
  position: relative;
  :hover {
    cursor: pointer;
  }
`;
const MenuBorder = styled.div`
  ${({ active }) =>
    active &&
    css`
      width: 100%;
      height: 6px;
      position: absolute;
      background-color: ${props => props.userColor};
      bottom: 0.5px;
      opacity: 0.3;
    `}
`;
