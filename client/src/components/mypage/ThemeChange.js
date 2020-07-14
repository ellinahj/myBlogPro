import styled from 'styled-components';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setThemeColor, setThemeRGBA } from '../../actions/base';
import ChromePicker from 'react-color';
export default function ThemeChange(props) {
  const { handleThemeChange } = props;
  const dispatch = useDispatch();
  const [openPicker, setOpenPicker] = useState(false);
  const themeButton = useRef(null);
  const userColor = useSelector(state => state.common.userColor);
  const rgbaColor = useSelector(state => state.common.rgbaColor);

  const popover = {
    position: 'absolute',
    // right: '30px',
    zIndex: '2'
  };
  const cover = {
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  };
  const handlePickComplete = color => {
    color.rgb.a = 0.2;
    const changeRgb = color.rgb;
    dispatch(setThemeRGBA(changeRgb));
    dispatch(setThemeColor(color.hex));
  };
  const handleClick = () => {
    setOpenPicker(true);
  };
  const handleClose = () => {
    setOpenPicker(false);
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
    <Con>
      <WidthDiv>
        <ThemeButton onClick={handleClick} userColor={userColor}>
          테마변경
        </ThemeButton>
      </WidthDiv>
      {openPicker ? (
        <div style={popover} ref={themeButton}>
          <div style={cover} onClick={handleClose} />
          <ChromePicker color={userColor} onChangeComplete={handlePickComplete} disableAlpha={true} />
        </div>
      ) : null}
      <ColorBox userColor={userColor} />
    </Con>
  );
}
const Con = styled.div`
  display: flex;
  align-items: center;
`;
const WidthDiv = styled.div`
  width: 120px;
`;
const ThemeButton = styled.button`
  width: 80px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  border: 1px solid ${props => props.userColor};
  color: ${props => props.userColor};
  background: #fff;
`;

const ColorBox = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background: ${props => props.userColor};
`;
