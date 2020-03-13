import { INCREMENT } from './actionTypes';

const increment = payload => {
  return {
    type: INCREMENT,
    payload
  };
};
export { increment };
