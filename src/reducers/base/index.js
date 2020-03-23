import { INCREMENT, SET_THEME_COLOR } from '../../actions/base/actionTypes';

export const initialState = {
  number: 0,
  enteredColor: '#ff838b'
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
  }
  return state;
};

export default commonReducer;
