import { INCREMENT, SET_THEME_COLOR, SET_LOGIN, SET_USER_INFO } from './actionTypes';

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
export { increment, setThemeColor, setLogin, setUserInfo };
