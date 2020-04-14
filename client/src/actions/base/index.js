import { INCREMENT, SET_THEME_COLOR } from './actionTypes';

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
export { increment, setThemeColor };
