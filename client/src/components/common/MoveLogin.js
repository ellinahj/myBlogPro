import styled from 'styled-components';
import Button from '../common/Button';

export default function MoveLogin() {
  return (
    <Container>
      로그인하고 <br />
      나만의 다이어리를 관리해보세요.
      <Button type="button">카카오톡으로 로그인하기</Button>
    </Container>
  );
}

const Container = styled.div``;
