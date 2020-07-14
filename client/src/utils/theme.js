import { css } from 'styled-components';
const theme = {
  white: '#ffffff',
  black: '#000000',
  sFont: '13px',
  mFont: '16px',
  lFont: '20px',
  xlFont: '23px'
};
const BasicButton = css`
  color: #111;
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
