import { css } from 'styled-components';
const theme = {
  white: '#ffffff',
  black: '#000000',
  ssFont: '12px',
  sFont: '13px',
  mFont: '16px',
  mlFont: '18px',
  lFont: '20px',
  xlFont: '23px',
  greenFont: '#2fae00',
  redFont: '#b30000'
};
const BasicButton = css`
  cursor: pointer;
`;

const BlueEditBtn = css`
  color: #6da3f7;
  font-weight: bold;
  cursor: pointer;
`;
const BasicTitle = css`
  font-weight: bold;
  color: #111;
`;
export { theme, BasicButton, BlueEditBtn, BasicTitle };
