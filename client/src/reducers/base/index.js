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
} from '../../actions/base/actionTypes';

export const initialState = {
  number: 0,
  userColor: '#7c7cec',
  isLoggedIn: undefined,
  userInfo: undefined,
  category: undefined,
  loading: false,
  showToolTip: true,
  clickMenu: { cateId: undefined },
  selectFont: `'Gothic A1', sans-serif`
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
      userColor: action.payload
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
      ...state,
      category: action.payload
    };
  } else if (action.type === SET_LOADING) {
    return {
      ...state,
      loading: action.payload
    };
  } else if (action.type === SET_TOOLTIP) {
    return {
      ...state,
      showToolTip: action.payload
    };
  } else if (action.type === SET_CLICKMENU) {
    return {
      ...state,
      clickMenu: action.payload
    };
  } else if (action.type === SET_FONT) {
    return {
      ...state,
      selectFont: action.payload
    };
  }

  return state;
};

export default commonReducer;
