import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';

export default function MenuCo(props) {
  const category = useSelector(state => state.common.category);
  const clickMenu = useSelector(state => state.common.clickMenu);
  const { userColor, luminantColor, isSticky, handleMenuClick } = props;

  return (
    <MenuWrap luminantColor={luminantColor} isSticky={isSticky}>
      {category &&
        category.length > 0 &&
        category.map((item, index) => {
          return (
            <Menu userColor={userColor} onClick={e => handleMenuClick(item.id)} key={index}>
              {item.title}
              <MenuBorder userColor={userColor} active={clickMenu && clickMenu.cateId === item.id} />
            </Menu>
          );
        })}
    </MenuWrap>
  );
}
const MenuWrap = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: auto;
    ::-webkit-scrollbar {
    display: none;
}
  max-width: 765px;
  height: 60px;
  background-color: #fff;
  position: relative;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  /* border-right: 1px solid #ddd; */
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
  @media (max-width: 780px) {
    max-width: 105px;
  }
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  :hover {
    cursor: pointer;
    background: ${props => props.userColor};
    opacity: 0.8;
  }
`;
const MenuBorder = styled.div`
  ${({ active }) =>
    active &&
    css`
      width: 100%;
      height: 6px;
      position: absolute;
      background: ${props => props.userColor};
      bottom: 0.5px;
      opacity: 0.5;
    `}
`;
