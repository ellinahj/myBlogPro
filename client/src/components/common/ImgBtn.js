import styled from 'styled-components';
export default function ImgBtn(props) {
  const { className, src, onClick, width, height, bg, radius, padding } = props;
  return (
    <ImgWrap
      className={className}
      src={src}
      onClick={onClick}
      width={width}
      height={height}
      bg={bg}
      radius={radius}
      padding={padding}
    />
  );
}
const ImgWrap = styled.img`
  width: ${props => `${props.width}px` || '100%'};
  height: ${props => `${props.height}px` || '100%'};
  cursor: pointer;
  background: ${props => (props.bg ? props.bg : '')};
  border-radius: ${props => (props.radius ? `${props.radius}` : '')};
  padding: ${props => (props.padding ? props.padding : '')};
`;
