import {
  INCREMENT,
  SET_THEME_COLOR,
  SET_THEME_RGBA,
  SET_LOGIN,
  SET_USER_INFO,
  SET_CATE,
  SET_LOADING
} from '../../actions/base/actionTypes';

export const initialState = {
  number: 0,
  enteredColor: '#ff254f',
  rgbaColor: '#fbfbfb',
  isLoggedIn: false,
  userInfo: undefined,
  category: undefined,
  loading: false
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
  } else if (action.type === SET_THEME_RGBA) {
    return {
      ...state,
      rgbaColor: action.payload
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
  } else if (action.type === SET_CATE) {
    return {
      category: action.payload
    };
  } else if (action.type === SET_LOADING) {
    return {
      loading: action.payload
    };
  }

  return state;
};

export default commonReducer;
