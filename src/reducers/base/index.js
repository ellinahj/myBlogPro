import { INCREMENT } from '../../actions/base/actionTypes';

export const initialState = {
  number: 0
};

const counter = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      //   ...state,
      number: state.number + 1
    };
  }
  return state;
};

export default counter;
