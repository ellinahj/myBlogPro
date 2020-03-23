import styled from 'styled-components';
import PropTypes from 'prop-types';
export default function Button(props) {
  return <ButtonContainer type={props.type}>{props.children}</ButtonContainer>;
}
const ButtonContainer = styled.button`
  font-size: ${props => props.theme.normalFont};
`;
Button.propTypes = {
  type: PropTypes.string.isRequired
};
