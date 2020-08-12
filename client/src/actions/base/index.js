import {
  INCREMENT,
  SET_THEME_COLOR,
  SET_LOGIN,
  SET_USER_INFO,
  SET_CATE,
  SET_LOADING,
  SET_TOOLTIP,
  SET_CLICKMENU,
  SET_FONT
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
const setCategory = payload => {
  return {
    type: SET_CATE,
    payload
  };
};
const setLoading = payload => {
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
const setClickMenu = payload => {
  return {
    type: SET_CLICKMENU,
    payload
  };
};
const setFont = payload => {
  return {
    type: SET_FONT,
    payload
  };
};
export { increment, setThemeColor, setLogin, setUserInfo, setCategory, setLoading, setToolTip, setClickMenu, setFont };
