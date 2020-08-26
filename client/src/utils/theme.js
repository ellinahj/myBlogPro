import { css } from 'styled-components';
const theme = {
  white: '#ffffff',
  black: '#000000',
  ssFont: '13px',
  sFont: '15px',
  mFont: '17px',
  mlFont: '19px',
  lFont: '20px',
  xlFont: '23px',
  greenFont: '#2fae00',
  redFont: '#ff5a5a'
};
const BasicButton = css`
  cursor: pointer;
  background: #eee;
  border: 1px solid #666;
  border-radius: 2px;
`;

const BlueEditBtn = css`
  font-size: ${theme.mlFont};
  font-weight: bold;
  cursor: pointer;
  color: #69b7ff;
`;
const BasicTitle = css`
  font-weight: bold;
  font-size: ${theme.mlFont};
  color: #111;
`;
export { theme, BlueEditBtn, BasicButton, BasicTitle };
