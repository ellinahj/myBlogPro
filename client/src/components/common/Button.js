import styled from 'styled-components';
import PropTypes from 'prop-types';
export default function Button(props) {
  return (
    <ButtonContainer type={props.type} pd={props.pd} bg={props.bg}>
      {props.children}
    </ButtonContainer>
  );
}
const ButtonContainer = styled.button`
  cursor: pointer;
  font-size: ${props => props.theme.mFont};
  padding: ${props => (props.pd ? `${props.pd}px` : '4px')};
`;
Button.propTypes = {
  type: PropTypes.string.isRequired
};
