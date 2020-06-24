import { INCREMENT, SET_THEME_COLOR, SET_LOGIN, SET_USER_INFO } from '../../actions/base/actionTypes';

export const initialState = {
  number: 0,
  enteredColor: '#ff254f',
  isLoggedIn: false,
  userInfo: undefined
};

const commonReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      number: state.number + 1
    };
  } else if (action.type === SET_THEME_COLOR) {
    return {
      ...state,
      enteredColor: action.payload
    };
  } else if (action.type === SET_LOGIN) {
    return {
      ...state,
      isLoggedIn: action.payload
    };
  } else if (action.type === SET_USER_INFO) {
    return {
      ...state,
      userInfo: action.payload
    };
  }
  return state;
};

export default commonReducer;
