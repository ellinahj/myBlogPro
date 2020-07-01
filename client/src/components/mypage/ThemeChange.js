import styled from 'styled-components';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setThemeColor, setThemeRGBA } from '../../actions/base';
import ChromePicker from 'react-color';
export default function ThemeChange() {
  const dispatch = useDispatch();
  const [openPicker, setOpenPicker] = useState(false);
  const themeButton = useRef(null);

  const handlePickComplete = color => {
    console.log(color, 'compelete color');
    color.rgb.a = 0.2;
    const changeRgb = color.rgb;
    dispatch(setThemeRGBA(changeRgb));
    dispatch(setThemeColor(color.hex));
  };
  const handleClick = () => {
    setOpenPicker(!openPicker);
  };
  const handleClose = () => {
    setOpenPicker(false);
  };
  const userColor = useSelector(state => state.common.enteredColor);
  const popover = {
    position: 'absolute',
    right: '30px',
    zIndex: '2'
  };
  const cover = {
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  };
  useEffect(() => {
    //입력창 밖 선택 시 검색내역창 감추기
    function handleClickOutside(e) {
      if (themeButton.current && !themeButton.current.contains(e.target)) {
        handleClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      <ThemeButton onClick={handleClick} ref={themeButton} userColor={userColor}>
        테마변경
      </ThemeButton>
      {openPicker ? (
        <div style={popover}>
          <ChromePicker color={userColor} onChangeComplete={handlePickComplete} disableAlpha={true} />
        </div>
      ) : null}
    </>
  );
}

const ThemeButton = styled.button`
  width: 90px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  border: 1px solid ${props => props.userColor || '#ff254f'};
  color: ${props => props.userColor || '#ff254f'};
`;
