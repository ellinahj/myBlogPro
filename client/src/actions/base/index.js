import {
  INCREMENT,
  SET_THEME_COLOR,
  SET_THEME_RGBA,
  SET_LOGIN,
  SET_USER_INFO,
  SET_CATE,
  SET_LOADING,
  SET_TOOLTIP
} from './actionTypes';

const increment = payload => {
  return {
    type: INCREMENT,
    payload
  };
};
const setThemeColor = payload => {
  return {
    type: SET_THEME_COLOR,
    payload
  };
};
const setThemeRGBA = payload => {
  return {
    type: SET_THEME_RGBA,
    payload
  };
};
const setLogin = payload => {
  return {
    type: SET_LOGIN,
    payload
  };
};
const setUserInfo = payload => {
  return {
    type: SET_USER_INFO,
    payload
  };
};
const setCate = payload => {
  return {
    type: SET_CATE,
    payload
  };
};
const setLoding = payload => {
  return {
    type: SET_LOADING,
    payload
  };
};
const setToolTip = payload => {
  return {
    type: SET_TOOLTIP,
    payload
  };
};
export { increment, setThemeColor, setThemeRGBA, setLogin, setUserInfo, setCate, setLoding, setToolTip };
